module.exports = {
    privateKey : process.env.AUTH_PRIVATE_KEY || '3fA5WPyDZ051',
    authExpired : parseInt(process.env.AUTH_EXPIRED_DATE) || 21600
};