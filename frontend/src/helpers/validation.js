import i18n from "../i18n";

export const required = value => (value ? undefined : i18n.t('errors.required'));

export const number = value => value && isNaN(Number(value)) ? i18n.t('errors.numberRequired') : undefined;

export const validateEmail = value => {
  return value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? i18n.t('errors.emailInvalid')
    : undefined;
};