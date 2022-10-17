import { NextFunction, Request, Response } from "express"

// TODO: we should add a type definition for handlebars-i18n
const HandlebarsI18n = require("handlebars-i18n") as any;

export default function handle (hbs: any) {
  return function i18HbsMiddleware (req: Request, res: Response, next: NextFunction) {
    // initialize handelbar i18n with i18n set by i18next-http-middleware
    var i18n = (req as any).i18n
    HandlebarsI18n.init(null, i18n);
    return next();
  }
}