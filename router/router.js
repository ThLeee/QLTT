const Router               = require('express').Router;
const InternController     = require('../http/controller/intern-controller');
const LecturerController   = require('../http/controller/lecturer-controller');
const registration         = require('../http/controller/registration-controller');
const CompanyController    = require('../http/controller/company-controller');
const AreaController       = require('../http/controller/area-controller');
const CourseController     = require('../http/controller/course-controller');
const InternshipController = require('../http/controller/internship-controller');
const internshipList       = require('../http/controller/internship-list-controller');
const SearchAdvance        = require('../http/controller/search-advanced');
const checkData            = require('../http/middleware');
const UserController       = require('../http/controller/user-controller');
const AuthController       = require('../http/controller/auth-controller/auth.controller');
const CouncilController    = require('../http/controller/council-controller');
const InternEvaluationController = require('../http/controller/intern-evaluation-controller');

const notRequireLogin      = require('../http/middleware/not-require-login');
const credentialValidator  = require('../http/middleware/auth-middleware/credential.middleware');

let router = new Router();

let internEvaluationController = new InternEvaluationController();

let authController = new AuthController();

let councilController = new CouncilController();

let lecturerController              = new LecturerController();
let internshipController            = new InternshipController();
let courseController                = new CourseController();
let companyController               = new CompanyController();
let areaController                  = new AreaController();
let internController                = new InternController();
let searchAdvance                   = new SearchAdvance();
let userController = new UserController();




//intern-evaluation
router.post('/intern-evaluation', internEvaluationController.add);
router.get('/intern-evaluation-high-score', internEvaluationController.getHighScore);
router.get('/rates', internEvaluationController.all);
router.post('/intern-evaluation-rate', internEvaluationController.rate);
//council
router.post('/council', councilController.addCouncil);
router.get('/council-detail-by-internship/:internship_id', councilController.getCouncilByInternship);
router.post('/council/remove-member', councilController.removeMember);
router.post('/council/add-member', councilController.addMember);
//login

router.post('/login', credentialValidator, authController.login);
/*
    user
 */

router.get('/users', userController.checkSignUp);

router.post('/user', checkData.checkSignUp, checkData.user, userController.create);

router.post('/send-code', userController.sendCode);

router.post('/send-mail', userController.send);

router.post('/user/check-email', userController.checkEmail);

router.put('/user', checkData.user, userController.update);

router.delete('/user/:user_name', userController.remove);

router.post('/sign-up', userController.signUp);

//router.post('/login', checkData.checkLogin, userController.login);

/*
        //////////////////
 */
router.get('/home',function(req,res){
    res.json({home : 'my home after login'})
});

router.get('/loginView',notRequireLogin,function(req,res) {
    res.json({view: " login view"});
});
/*
    Search Advanced
 */
router.get('/search-advance', searchAdvance.search);
/*
    Import
 */


router.post('/import/interns', checkData.import, internController.importIntern);

router.get('/interns', internController.all);

router.get('/intern/:id', internController.get);

router.delete('/intern/:id', internController.delete);

router.put('/intern/:id',checkData.isIntern, internController.update);

router.post('/intern', checkData.isIntern , internController.create);


/*
    lecturer
 */
router.post('/import/lecturers', checkData.import, lecturerController.importLecturer);

router.get('/lecturers', lecturerController.all);

router.get('/lecturer/:id', lecturerController.get);

router.put('/lecturer/:id',checkData.isLecturer, lecturerController.update);

router.post('/lecturer',checkData.isLecturer, lecturerController.create);

router.delete('/lecturer/:id', lecturerController.delete);

/*
    Company
 */

router.get('/companies', companyController.all);

router.get('/company/:id', companyController.get);

router.get('/companies/search-basic', companyController.searchByName);

router.post('/company', checkData.companyRequest, companyController.create);

router.put('/company/:id', checkData.companyRequest, companyController.update);

router.delete('/company/:id', companyController.remove);
/*
    Area company
 */
router.get('/company/:idCompany/areas',checkData.isCompany, areaController.all);

router.get('/company/:idCompany/area/:id',checkData.isCompany, areaController.get);

router.post('/company/:idCompany/area', checkData.areaRequest, areaController.create);

router.put('/company/:idCompany/area/:id', checkData.areaRequest, areaController.update);

router.delete('/company/:idCompany/area/:id', areaController.remove);

router.post('/intern-area', areaController.addIntern);

router.get('/intern-area', areaController.listInternInArea);
/*
    COURSE
*/

router.get('/courses', courseController.all);

router.get('/course/:id', courseController.get);

router.get('/courses/search-basic', courseController.searchByName);

router.post('/course',checkData.courseRequest, courseController.create);

router.put('/course/:id', checkData.courseRequest, courseController.update);

router.put('/course/status/:idCourse', checkData.isCourse, courseController.updateStatus);

router.delete('/course/:id', courseController.remove);

/*
    Internship
 */
router.get('/courses/internships',internshipController.all);

router.get('/course/:idCourse/internships',checkData.isCourse, internshipController.searchByCourse);

router.get('/course/:idCourse/internship/:id',checkData.isCourse, internshipController.get);

router.post('/course/:idCourse/internship',checkData.isCourse,checkData.internshipRequest, internshipController.create);

router.put('/course/:idCourse/internship/:id',checkData.isCourse, checkData.internshipRequest, internshipController.update);

router.delete('/internship/:id', internshipController.remove);
/*
    list internships
 */

router.get('/confirmed/:id', internshipList.getListCONFIRMEDLecturer);

router.get('/pending/:id', internshipList.getListPENDINGLecturer);

router.get('/internship/confirmed/:id', internshipList.getListCONFIRMED);

router.get('/internship/pending/:id', internshipList.getListPENDING);

/*
    Registration
 */
router.post('/registration/send/:id', registration.registerInternShip);

router.put('/registration/confirmed/:id', registration.confirm);

router.delete('/registration/:id', registration.deleteRegistration);

module.exports = router;
