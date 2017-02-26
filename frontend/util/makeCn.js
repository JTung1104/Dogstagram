import _classnames from 'classnames'

const virtualToFunctional = {
  "-flex-center": "flex items-center justify-center"
}

function convertVirtualClassnames (classNames) {
  return classNames.split(' ').map((className) => (
    // If mapping exists, use that. Else leave it as is
    virtualToFunctional[className] || className
  )).join(' ')
}

const convertCssModuleClassnames = (prefixToCssmodules) => (classNames) => (
  // Only proceed if prefixToCssmodules is not empty/undefined.
  // Otherwise, just return classNames (else case)
  prefixToCssmodules
  ? classNames.split(' ').map((className) => { // For each class name...
    let convertedClassname

    // For each prefix (like "h_" or "f_")...
    Object.keys(prefixToCssmodules).forEach((prefix) => {
      // Test to see if the prefix matches the class name
      const regexp = new RegExp(`^${prefix}`)
      if (regexp.test(className)) {
        // If it matches, get the CSS module object
        // by calling prefixToCssmodules[prefix],
        // then look up the className (without the prefix)
        convertedClassname = prefixToCssmodules[prefix][className.replace(regexp, '')]
      }
    })

    // If successfully converted, return both the CSS module version
    // and the pre-conversion version (for in-browser debugging).
    return convertedClassname ? `${convertedClassname} ${className}` : className
  }).join(' ')
  : classNames
)

const makeCn = (prefixToCssmodules) => (classNames) => (
  // First run convertVirtualClassnames, then pass the result to convertCssModuleClassnames
  convertCssModuleClassnames(prefixToCssmodules)(convertVirtualClassnames(_classnames(classNames)))
)

export default makeCn