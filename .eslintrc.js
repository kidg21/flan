const restrictedGlobals = [
  "addEventListener",
  "blur",
  "close",
  "closed",
  "confirm",
  "defaultStatus",
  "event",
  "external",
  "defaultstatus",
  "find",
  "focus",
  "frameElement",
  "frames",
  "history",
  "innerHeight",
  "innerWidth",
  "length",
  "location",
  "locationbar",
  "menubar",
  "moveBy",
  "moveTo",
  "name",
  "onblur",
  "onerror",
  "onfocus",
  "onload",
  "onresize",
  "onunload",
  "open",
  "opener",
  "opera",
  "outerHeight",
  "outerWidth",
  "pageXOffset",
  "pageYOffset",
  "parent",
  "print",
  "removeEventListener",
  "resizeBy",
  "resizeTo",
  "screen",
  "screenLeft",
  "screenTop",
  "screenX",
  "screenY",
  "scroll",
  "scrollbars",
  "scrollBy",
  "scrollTo",
  "scrollX",
  "scrollY",
  "self",
  "status",
  "statusbar",
  "stop",
  "toolbar",
  "top"
];

module.exports = {
  rules: {
    //15 is an arbitrary number, and complexity is only a heuristic.  Any function with 15+ should be reviewed
    //to make sure it's not unnecessarily complex or trying to do to much.  Please note that this is only a
    //heuristic and some functions can be more than 15 and still be fine, while some may be overly complex and less than 15
    complexity: ["warn", 15],

    //While underscore doesn't change the behavior of anything, it's a way to indicate future developers and
    //maintainers to do their best not to expose these variables
    "no-underscore-dangle": "off",

    //Set to warn.  Some lines of code (and comments), like function definitions, exceed 100 characters,
    //and splitting it up into multiple lines makes it harder to read in some circumstances
    "max-len": [
      "warn",
      100,
      2,
      {
        ignoreUrls: true,
        ignoreComments: true,
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true
      }
    ],

    //When using the arrow function on a function that only contains 1 line, it's normally written without the { } and without the "return".
    //To keep things consistent, and to make it easy to change a function from 1 line to 2+, or vice versa, this rule is overwritten
    "arrow-body-style": ["warn", "always"],

    //Use double quotes.  However, backticks will allow for string template usage.  String template is mandatory in the airbnb style
    quotes: [2, "double", { allowTemplateLiterals: true }],

    //Turn this off.  All of our code currently places require statements in an if block, so that it doesn't break if the file is
    //included directly.
    "global-require": "off",

    //I can't see any way this could know how to resolve a require statement appropriately, so turning this off.
    "import/no-unresolved": [0],

    // Only CSS needs an extension.
    "import/extensions": [
      "error",
      "never",
      {
        css: "always",
        jpg: "always",
        gif: "always",
        png: "always",
        md: "always",
        data: "always"
      }
    ],

    //We have places in code where we add multiple properties to an object, some of which require square-bracket notation and some of which do not.
    //For consistency, set this to warn, so that we can have all of those added in the same way.
    "dot-notation": "warn",

    // Allow extending String and Date objects, since we have valid reasons for doing so.
    "no-extend-native": ["error", { exceptions: ["String", "Date"] }],

    // Use of object shorthand should be preferred & consistent throughout the object (i.e., if not everything can be shorthand, nothing should be.)
    "object-shorthand": ["error", "consistent-as-needed"],

    // Prefer property names not to have quotes, but if any are required, ensure it's consistent (i.e., if something has to have quotes, everything should.)
    "quote-props": ["error", "consistent-as-needed"],

    // Allow setting properties on incoming parameters (since that's a legitimate means of modifying the object), but not reassigning the value (since that's not.)
    "no-param-reassign": ["error", { props: false }],

    // Allow increment and decrement operators.
    "no-plusplus": "off",

    // Allow operators of the same precedence (ex: a + b - c) without wrapping in additional parentheses.
    "no-mixed-operators": ["error", { allowSamePrecedence: true }],

    // Allow assignment in an if / while statement if it's wrapped in parens.
    "no-cond-assign": ["error", "except-parens"],

    // Allow using standard Object methods on all objects
    "no-prototype-builtins": "off",

    // Array destructuring is confusing and difficult to read
    "prefer-destructuring": "off",

    // This doesn't seem to be working correctly, so turn it off
    "react/jsx-curly-brace-presence": "off",

    // Allow bitshift operators
    "no-bitwise": ["error", { allow: ["<<", ">>"], int32Hint: true }],

    // Allow Math.pow and isNaN
    "no-restricted-properties": [
      "error",
      {
        object: "arguments",
        property: "callee",
        message: "arguments.callee is deprecated"
      },
      {
        object: "global",
        property: "isFinite",
        message: "Please use Number.isFinite instead"
      },
      {
        object: "self",
        property: "isFinite",
        message: "Please use Number.isFinite instead"
      },
      {
        object: "window",
        property: "isFinite",
        message: "Please use Number.isFinite instead"
      },
      {
        property: "__defineGetter__",
        message: "Please use Object.defineProperty instead."
      },
      {
        property: "__defineSetter__",
        message: "Please use Object.defineProperty instead."
      }
    ],

    // Allow global isNaN
    "no-restricted-globals": ["error", "isFinite"].concat(restrictedGlobals),

    //Cypress friendly expressions
    "no-unused-expressions": 0,
    "chai-friendly/no-unused-expressions": 2,

    // Allow all dev dependencies
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: true,
        optionalDependencies: false
      }
    ],

    // This rule will break Codacy Linting if it attempts to evaluate
    "react/no-typos": 0,

    // Not every method that COULD be a static SHOULD be.
    "class-methods-use-this": "warn"
    // "valid-jsdoc": 1
  },
  plugins: ["security", "no-unsanitized", "cypress", "chai-friendly"],
  // extend "airbnb-core" instead of "airbnb" if you want to exclude React rules.
  extends: [
    "plugin:security/recommended",
    "plugin:no-unsanitized/DOM",
    "airbnb"
  ],
  parser: null,
  env: {
    browser: true,
    es6: true,
    jquery: true,
    mocha: true,
    "cypress/globals": true
  },
  globals: {
    Dmp: true,
    jsts: true,
    ActiveXObject: true,
    Microsoft: true,
    LocalFileSystem: true,
    openIndexedDB: true,
    Handlebars: true,
    XLSX: true,
    Cypress: true,
    cy: true,
    expect: true
  }
};
