"use client";

import React, { Suspense } from 'react'
import { ErrorBoundary } from 'react-error-boundary'

const ComponentOne = ({ item, color }) => {
   const name = item.category.name.brand.throwErrorHere;

   try {
      if (item?.category?.type === "Rotisserie Chicken") throw new Error(`I HATE ${item.category.type} and is why I threw this error!!!`)
      return (
         <div style={{
            border: '1.5px solid black',
            overflow: 'hidden',
            backgroundColor: color % 2 == 1 ? 'lightseagreen' : 'burlywood',
            margin: '1%',
            padding: '5px'
         }}>
            <ErrorBoundary fallback={<h3><i>SHIT...</i> YOU <span style={{color: 'red'}}>F*CKED</span> UP!!!!!</h3>}>
               <Suspense fallback={<h3>HOLD ON, WILL YA?</h3>}>
                  <h3>{color}: PRODUCT: {color==1 ? fdsafdsaaaa: item.category.type}.</h3>
               </Suspense>         
            </ErrorBoundary>
         </div>
      )
   } catch (error) {
      return (
         <div style={{backgroundColor: 'hotpink', border: '3.5px solid #333', margin: '1% 5%', padding: '1%'}}>
            <h1>SONOVA B****!!! YOU screwed up!!!</h1>
            <h3>Don't believe me? Believe THIS:</h3>
            <h3>{JSON.stringify({error, errorCode: error.code, errorMessage: error.message})}.</h3>
         </div>
      )
   }
}

export default ComponentOne