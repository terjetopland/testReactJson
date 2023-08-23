import React from "react"
import TestRecords from './testRecords.json'

function JsonReader() {
    return(
        <div className="jsonFile">
        {
          // This syntax checks wheter its is some records before displaying it.
          TestRecords && TestRecords.map( record => {
            return(
              <div key={ record.id }>
                <strong>{ record.title }</strong><br/>
                { record.content }<br/>
                
                
                { record.tech && record.tech.map( secondary => {
                  return(
                    <div key={ record.id }>
                      -- { secondary.name } --
                      { secondary.code && secondary.code.map( third => {
                        return(
                          <div>
                            -- -- { third.name } -- --
                          </div>
                        )
                      })}
                      <br/><br/>
                      </div> 
                      
                  )
                  
                }) }
  
                
              </div>
            )
          })
        }
      </div>
    )
    
}

export default JsonReader;