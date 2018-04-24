import React from 'react'
import './index.css'

const Code = () => (
  <pre className='code'>
    {`
// Function doWork has 20% chance of throwing an error, this can be an example of api that returns error
// due to malformed payloads or internal server error
function doWork (i) {
  return new Promise((resolve, reject) => {
    if (Math.random() < 0.2) {
      return reject(new Error('doWorkError: an unexpected error has occured'))
    }
    resolve(i)
  })
}

// This will run 10 doWork process concurrently, and stop if one of them fail
async function stopOperationIfFail () {
  const promises = Array(10).fill(0).map((_, i) => {
    return doWork(i)
  })
  const values = await Promise.all(promises)
  console.log(values)
}

// This will run 10 doWork process concurrently, and will return null if it fails
async function discardOperationThatFails () {
  const promises = Array(10).fill(0).map((_, i) => {
    return doWork(i).catch((error) => {
      console.log(error.message)
      return null
    })
  })
  const values = await Promise.all(promises)
  console.log(values)

  // Part of our values contains null, we have to filter it now
  const successfulValues = values.filter(nonNull => nonNull !== null)
  // Why we do not do this? Try to uncomment this line to find out
  // const successfulValues = values.filter(nonNull => nonNull)
  console.log(successfulValues)
}

stopOperationIfFail().catch(console.error)
discardOperationThatFails().catch(console.error)
`}
  </pre>
)

export default Code
