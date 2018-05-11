const express                       = require('express');
const router                        = express.Router();
const InternController              = require('../http/controller/intern-controller');
const LecturerController            = require('../http/controller/lecturer-controller');
const registration                  = require('../http/controller/registration-controller');
const CompanyController             = require('../http/controller/company-controller');
const AreaController             = require('../http/controller/area-controller');
const CourseController              = require('../http/controller/course-controller');
const InternshipController          = require('../http/controller/internship-controller');
const internshipList                = require('../http/controller/internship-list-controller');
const SearchAdvance                 = require('../http/controller/search-advanced');
const checkData                     = require('../http/middleware');

let lecturerController              = new LecturerController();
let internshipController            = new InternshipController();
let courseController                = new CourseController();
let companyController               = new CompanyController();
let areaController                  = new AreaController();
let internController                = new InternController();
let searchAdvance                   = new SearchAdvance();
/*
    Search Advanced
 */
router.get('/search-advance', searchAdvance.search);
/*
    Import
 */


router.get('/import/interns', internController.import);

router.get('/import/lecturer', lecturerController.import);

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
router.get('/areas', areaController.all);

router.get('/area/:id', areaController.get);

router.get('/areas/search-basic', areaController.searchByName);

router.post('/area', checkData.areaRequest, areaController.create);

router.put('/area/:id', checkData.areaRequest, areaController.update);

router.delete('/area/:id', areaController.remove);

/*
    COURSE
*/

router.get('/courses', courseController.all);

router.get('/course/:id', courseController.get);

router.get('/courses/search-basic', courseController.searchByName);

router.post('/course',checkData.courseRequest, courseController.create);

router.put('/course/:id', checkData.courseRequest, courseController.update);

router.delete('/course/:id', courseController.remove);

/*
    Internship
 */
router.get('/courses/internships',internshipController.all);

router.get('/course/:idCourse/internships',checkData.isCourse, internshipController.searchByCourse);

router.get('/course/:idCourse/internship/:id',checkData.isCourse, internshipController.get);

router.post('/course/:idCourse/internship',checkData.isCourse, internshipController.create);

router.put('/course/:idCourse/internship/:id',checkData.isCourse, internshipController.update);

router.delete('/internship/:id', internshipController.remove);
/*
    list internships
 */

router.get('/internship/confirmed/:id', internshipList.getListCONFIRMED);

router.get('/internship/pending/:id', internshipList.getListPENDING);

/*
    Registration
 */
router.post('/registration/send', registration.registerInternShip);

router.put('/registration/confirm', registration.confirm);

module.exports = router;
