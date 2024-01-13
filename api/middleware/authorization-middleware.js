import ForbiddenError from "../../domain/errors/forbidden-error.js";

const AuthorizationMiddleware = (req, res, next) => {
  if (req.auth.claims.metadata.role !== "admin") {
    throw new ForbiddenError();
  }
  next();
};

export default AuthorizationMiddleware;
