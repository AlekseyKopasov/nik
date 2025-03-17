import cn from 'classnames'
import { type FormikProps } from 'formik'
import css from './index.module.scss'

export const Textarea = ({ name, label, formik }: { name: string; label: string; formik: FormikProps<any> }) => {
  const error = formik.errors[name] as string | undefined
  const touched = formik.touched[name]
  const disabled = formik.isSubmitting
  const invalid = !!error && !!touched

  return (
    <div
      className={cn({
        [css.field]: true,
        [css.disabled]: disabled,
      })}
    >
      <label className={css.label} htmlFor="{name}">
        {label}
      </label>

      <textarea
        className={cn({
          [css.input]: true,
          [css.invalid]: invalid,
        })}
        onChange={(e) => {
          void formik.setFieldValue(name, e.target.value)
        }}
        onBlur={() => {
          void formik.setFieldTouched(name)
        }}
        value={formik.values[name]}
        name={name}
        id={name}
        disabled={disabled}
      />
      {invalid && <div className={css.error}>{error}</div>}
    </div>
  )
}
