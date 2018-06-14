class Credential {

    constructor(code, password) {
        this.code = code;
    }

    getCode() {
        return this.code;
    }

    setPassword(password) {
        this.password = password;
    }

    getPassword() {
        return this.password;
    }

    setId(id) {
        this.id = id;
    }

    getId() {
        return this.id;
    }

    setRole(role) {
        this.role = role;
    }

    getRole() {
        return this.role;
    }
}

module.exporst = Credential;
