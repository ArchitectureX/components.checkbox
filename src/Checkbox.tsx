import React, { FC, ChangeEvent } from 'react'

interface CheckboxProps {
  checked: boolean
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  label?: string
}

const Checkbox: FC<CheckboxProps> = ({ checked, onChange, label }) => {
  return (
    <label className="inline-flex items-center cursor-pointer">
      <input type="checkbox" className="hidden" checked={checked} onChange={onChange} />
      <span className={`w-6 h-6 inline-block rounded ${checked ? 'bg-blue-600' : 'bg-gray-200'}`}>
        {checked && (
          <svg className="fill-current text-white w-6 h-6" viewBox="0 0 20 20">
            <path d="M7.629 14.957l-3.629-3.457 1.8-1.8 1.829 1.743 4.371-4.743 1.8 1.8-6.171 6.457z" />
          </svg>
        )}
      </span>
      {label && <span className="ml-2">{label}</span>}
    </label>
  )
}

export default Checkbox
