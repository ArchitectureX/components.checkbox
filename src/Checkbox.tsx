import React, { FC } from 'react'

type Props = {
  checked: boolean
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  label?: string
}

const Checkbox: FC<Props> = ({ checked, onChange, label }) => (
  <label className="inline-flex items-center">
    <input
      type="checkbox"
      checked={checked}
      onChange={onChange}
      className="form-checkbox text-blue-600 rounded focus:ring-blue-500"
    />
    {label && <span className="ml-2">{label}</span>}
  </label>
)

export default Checkbox
