import { NextFunction, Request, Response } from "express"


export default function handle (hbs: any) {

    return function i18HbsMiddleware (req: Request, res: Response, next: NextFunction) {
        var i18n = (req as any).i18n
        hbs.registerHelper("__",
         /**
         * retrieves the translation phrase from a key given as string
         * use like: {{__ "key_name"}}
         * or with attributes: {{__ "key_with_count" count=7}}
         *
         * @param str
         * @param attributes
         * @returns {*}
         */
          function (str: String, attributes: any) {
            return new hbs.SafeString((typeof(i18n) !== 'undefined' ? i18n.t(str, attributes.hash) : str));
          }
        )
        return next();
    }
}