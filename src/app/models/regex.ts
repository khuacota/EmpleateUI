export enum Regex {
    ALPHANUMERIC = "[a-zA-Z0-9 ]+",
    ALPHABETIC = "[a-zA-ZñÑáéíóúÁÉÍÓÚ ]*",
    EMAIL = "[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{1,5}",
    URL = "(http://|https://)?(www.)?([a-zA-Z0-9]+).[a-zA-Z0-9]*.[a-z]{3}.?([a-z]+)?",
    PASSWORD = "(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+=.*-]).{6,}"
}
