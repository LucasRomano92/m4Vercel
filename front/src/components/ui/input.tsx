import classNames from 'classnames';
import React from 'react';



interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  children?: React.ReactNode;
  error?: string;

}

const Input = ({ label, id, className, children, error, ...rest }: InputProps) => {
  return (
    <div>
      <label
        htmlFor={id}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {label}
      </label>
      <div className="flex">
      <input
          id={id}
          className={classNames(
            'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg',
            'focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5',
            'dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400',
            'dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500',
            className
          )}
          {...rest}
        />
      {children && (
        <span
          className="flex items-center bg-primary-400 text-white px-3 rounded-lg ml-2 h-[42px]"
          style={{ height: '42px' }}
        >
          {children}
        </span>
      )}
      </div>
      {error && <span className="mt-1 text-sm text-red-500">{error}</span>}
    </div>
  );
};

export default Input;
