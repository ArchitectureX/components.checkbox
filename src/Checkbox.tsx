import React, { FC } from 'react'

interface CheckboxProps {
  checked: boolean
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  label?: string
}

const Checkbox: FC<CheckboxProps> = ({ checked, onChange, label }) => {
  return (
    <div className="flex items-center">
      <label className="inline-flex items-center cursor-pointer">
        <input type="checkbox" className="hidden" checked={checked} onChange={onChange} />
        <span
          className={`w-6 h-6 flex items-center justify-center rounded transition duration-200 ${
            checked ? 'bg-blue-600' : 'bg-gray-200 border-2 border-gray-400'
          }`}
        >
          {checked && (
            <svg
              className="fill-current text-white w-4 h-4" // Adjusted size of the checkmark
              viewBox="0 0 20 20"
              style={{
                marginLeft: '2px',
                marginTop: '-1px'
              }}
            >
              <path d="M7.629 14.957l-3.629-3.457 1.8-1.8 1.829 1.743 4.371-4.743 1.8 1.8-6.171 6.457z" />
            </svg>
          )}
        </span>
      </label>
      {label && <span className="ml-2 text-sm">{label}</span>}
    </div>
  )
}

export default Checkbox
