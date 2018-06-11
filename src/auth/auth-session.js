class AuthSession {

    setSession(session) {
        this.session = session;
    }

    login(credential){
        this.session.credential = credential;
    }

    check() {
        return !this.session.credential.getId();
    }

    isGuest() {
        return !this.check();
    }

    logout() {
        return this.session.credential = null;
    }
}

module.exports = AuthSession;