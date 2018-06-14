const moment = require('moment');

class PersonalInformation {

    constructor(fullname, gender) {
        this.fullname = fullname;
        this.gender = gender;
    }

    setFromRawProfile(rawProfile) {
        this.fullname = rawProfile['name'];
        this.email = rawProfile['email'];
        this.gender = rawProfile['gender'];
        this.nation = rawProfile['nation'];
        this.religion = rawProfile['religion'];
        this.birthPlace= rawProfile['birth_place'];
        this.dateOfBirth = rawProfile['date_of_birth'];
        this.currentAddress = rawProfile['currentAddress'];
        this.identification = rawProfile['identification'];
        this.avatar = rawProfile['avatar'];
    }

    setAvatar(avatar) {
        this.avatar = avatar;
        return this;
    }

    getAvatar() {
        return this.avatar;
    }

    setDateOfBirth(dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
        return this;
    }

    getDateOfBirth() {
        return !this.dateOfBirth ? '' : moment(this.dateOfBirth).format('DD/MM/YYYY');
    }

    setBirthPlace(birthPlace) {
        this.birthPlace = birthPlace;
        return this;
    }

    getBirthPlace() {
        return this.birthPlace;
    }

    setCurrentAddress(currentAddress) {
        this.currentAddress = currentAddress;
        return this;
    }

    getCurrentAddress() {
        return this.currentAddress;
    }

    setIdentification(identification) {
        this.identification = identification;
        return this;
    }

    getIdentification() {
        return this.identification;
    }

    setEmail(email) {
        this.email = email;
        return this;
    }

    getEmail(){
        return this.email;
    }

    setNation(nation) {
        this.nation = nation;
        return this;
    }

    getNation() {
        return this.nation;
    }

    setReligion(religion) {
        this.religion = religion;
        return this;
    }

    getReligion() {
        return this.religion;
    }

    getGender(){
        return this.gender;
    }

    getFullname(){
        return this.fullname;
    }

    toJson(){
        return {
            fullname : this.getFullname(),
            email   : this.getEmail(),
            gender : this.getGender(),
            nation : this.getNation(),
            religion : this.getReligion(),
            dateOfBirth : this.getDateOfBirth(),
            birthPlace : this.getBirthPlace(),
            currentAddress : this.getCurrentAddress(),
            identification : this.getIdentification(),
            avatar : this.getAvatar()
        }
    }
}

module.exports = PersonalInformation;
