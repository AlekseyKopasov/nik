import cn from 'classnames'
import { type FormikProps } from 'formik'
import css from './index.module.scss'

export const Input = ({
  name,
  label,
  formik,
  maxWidth,
}: {
  name: string
  label: string
  formik: FormikProps<any>
  maxWidth?: number
}) => {
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

      <input
        className={cn({
          [css.input]: true,
          [css.invalid]: invalid,
        })}
        style={{ maxWidth }}
        type="text"
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
