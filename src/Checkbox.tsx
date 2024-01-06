import React, { FC, ChangeEvent } from 'react'
import cx from '@architecturex/utils.cx'

type Props = {
  checked: boolean
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  label?: string
  helpText?: string
  disabled?: boolean
}

const Checkbox: FC<Props> = ({ checked, onChange, label, helpText, disabled = false }) => {
  const classes = {
    label: 'text-gray-900 dark:text-gray-300',
    disabled: 'text-gray-400 dark:text-gray-500 cursor-not-allowed'
  }

  return (
    <div className="flex" style={{ margin: '0 auto', width: '90%' }}>
      <div className="flex items-center h-5">
        <input
          type="checkbox"
          value=""
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          checked={checked}
          onChange={onChange}
        />{' '}
      </div>
      <div className="ms-2 text-sm">
        <label
          className={cx.join(
            'ms-2 text-sm font-medium text-left',
            disabled ? classes.disabled : classes.label
          )}
          style={{ marginLeft: '4px' }}
        >
          {label}
        </label>

        {helpText && (
          <p className="text-xs font-normal text-gray-500 dark:text-gray-300">{helpText}</p>
        )}
      </div>
    </div>
  )
}

export default Checkbox
