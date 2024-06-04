## Table of Contents 

  - [Getting Started](#getting-started)
    - [Helpful Background Information](#helpful-background-information)
    - [Prerequisites](#prerequisites)
    - [External Dependencies](#external-dependencies)
    - [Adapters](#adapters)
    - [How to Install](#how-to-install)
    - [Testing](#testing)
  - [Using this Transformation Project](#using-this-transformation-project)
    - [Aggregate Functions for Arrays - IAP](#aggregate-functions-for-arrays-iap)
    - [Allocate One Number - IAP](#allocate-one-number-iap)
    - [Allocate a Pair of Numbers - IAP](#allocate-a-pair-of-numbers-iap)
    - [Chunk Array - IAP](#chunk-array-iap)
    - [Clear Empty Keys - IAP](#clear-empty-keys-iap)
    - [Convert CSV to JSON - IAP](#convert-csv-to-json-iap)
    - [Convert String to Special Cases - IAP](#convert-string-to-special-cases-iap)
    - [Filter Array of Objects by Key Value Pair - IAP](#filter-array-of-objects-by-key-value-pair-iap)
    - [Generate Random Integer Within Range - IAP](#generate-random-integer-within-range-iap)
    - [Get Random Element From Array - IAP](#get-random-element-from-array-iap)
    - [Get Value From JSON Pointer - IAP](#get-value-from-json-pointer-iap)
    - [Group Records by Property - IAP](#group-records-by-property-iap)
    - [Implement Set Operations on Arrays - IAP](#implement-set-operations-on-arrays-iap)
    - [Parse Number - IAP](#parse-number-iap)
    - [Remove Duplicates From Array of Arrays or Objects - IAP](#remove-duplicates-from-array-of-arrays-or-objects-iap)
    - [Remove Duplicates From Array of Primitives - IAP](#remove-duplicates-from-array-of-primitives-iap)
    - [Remove Element From Array by Index - IAP](#remove-element-from-array-by-index-iap)
    - [Remove Element From Array by Value - IAP](#remove-element-from-array-by-value-iap)
    - [Separate Array of Objects by Key Value Pair - IAP](#separate-array-of-objects-by-key-value-pair-iap)
    - [Split String into Array by Regex or Separator - IAP](#split-string-into-array-by-regex-or-separator-iap)
    - [Transpose Record by Creating Arrays for Each Property Within Groups - IAP](#transpose-record-by-creating-arrays-for-each-property-within-groups-iap)
  - [Additional Information](#additional-information)
    - [Support](#support)

## Getting Started

This section is helpful for deployments as it provides you with pertinent information on prerequisites and properties.

### Helpful Background Information

Transformation are used to translate data from one format to a different format.

### Prerequisites

Itential Transformation Projects are built and tested on particular versions of IAP. In addition, Transformation Projects are often dependent on external systems and as such, these Transformation Projects will have dependencies on these other systems. This version of **IAP - Data Manipulation** has been tested with:

- IAP **2023.2**

### External Dependencies

No external dependencies required to run this Transformation Project.

### Adapters

No adapters required to run this Transformation Project.

### How to Install

To install the Transformation Project:

- Verify you are running a supported version of the Itential Automation Platform (IAP) as listed above in the [Supported IAP Versions](#supported-iap-versions) section in order to install the Transformation Project.
- Import the Transformation Project in [Admin Essentials](https://docs.itential.com/docs/importing-a-prebuilt-4).

###  Testing

Cypress is generally used to test all Itential Transformation Projects. While Cypress is an opensource tool, at Itential we have internal libraries that have been built around Cypress to allow us to test with a deployed IAP.

When certifying our Transformation Projects for a release of IAP we run these tests against the particular version of IAP and create a release branch in GitLab. If you do not see the Transformation Project available in your version of IAP please contact Itential.

While Itential tests this Transformation Project and its capabilities, it is often the case the customer environments offer their own unique circumstances. Therefore, it is our recommendation that you deploy this Transformation Project into a development/testing environment in which you can test the Transformation Project.

## Using this Transformation Project
Transformation Projects contain 1 or more transformations. Each of these transformations have different inputs and outputs.

### <ins>Aggregate Functions for Arrays - IAP</ins>
Run a set of mathematical aggregate functions on an array of numbers

Capabilities include:
- The transformation allows IAP users to run a set of mathematical aggregate functions on an array of numbers. The aggregate functions consist of Sum, Product, Maximum, Minimum, Range, Count, Arithmetic Mean, Geometric Mean, Harmonic Mean, Median, Mode, Standard Deviation, and Variance







#### Entry Point IAP Component

The primary IAP component to run **Aggregate Functions for Arrays - IAP** is listed below:

<table>
  <thead>
    <tr>
      <th>IAP Component Name</th>
      <th>IAP Component Type</th>
    </tr>
  </thead>
  <tbody>
      <td>Aggregate Functions for Arrays - IAP</td>
      <td>Transformation</td>
    </tr>
  </tbody>
</table>

#### Inputs

The following table lists the inputs for **Aggregate Functions for Arrays - IAP**:

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Required</th>
      <th>Description</th>
      <th>Example Value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>groupedArray</td>
      <td>array</td>
      <td>yes</td>
      <td>An array of numbers</td>
      <td><pre lang="json">[
  1,
  2,
  3
]</pre></td>
    </tr>
  </tbody>
</table>



#### Outputs

The following table lists the outputs for **Aggregate Functions for Arrays - IAP**:

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Description</th>
      <th>Example Value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>sum</td>
      <td>number</td>
      <td>Summation of the items in the array</td>
      <td><pre lang="json">6</pre></td>
    </tr>    <tr>
      <td>product</td>
      <td>number</td>
      <td>Product of the items in the array</td>
      <td><pre lang="json">6</pre></td>
    </tr>    <tr>
      <td>maximum</td>
      <td>number</td>
      <td>The highest value in the array</td>
      <td><pre lang="json">3</pre></td>
    </tr>    <tr>
      <td>minumum</td>
      <td>number</td>
      <td>The lowest value in the array</td>
      <td><pre lang="json">1</pre></td>
    </tr>    <tr>
      <td>range</td>
      <td>number</td>
      <td>Difference between the lowest and highest values</td>
      <td><pre lang="json">2</pre></td>
    </tr>    <tr>
      <td>count</td>
      <td>number</td>
      <td>Number of items used for the calculations</td>
      <td><pre lang="json">3</pre></td>
    </tr>    <tr>
      <td>arithmeticMean</td>
      <td>number</td>
      <td>The sum of all the numbers in the array divided by the count of all numbers in the array</td>
      <td><pre lang="json">2</pre></td>
    </tr>    <tr>
      <td>geometricMean</td>
      <td>number</td>
      <td>The average value which signifies the central tendency of the numbers in the arrays by taking the root of the product of their values</td>
      <td><pre lang="json">1.8171205928321397</pre></td>
    </tr>    <tr>
      <td>harmonicMean</td>
      <td>number</td>
      <td>The reciprocal of the average of the reciprocals</td>
      <td><pre lang="json">1.6363636363636365</pre></td>
    </tr>    <tr>
      <td>median</td>
      <td>number</td>
      <td>Middle value of the items in the array</td>
      <td><pre lang="json">2</pre></td>
    </tr>    <tr>
      <td>mode</td>
      <td>array</td>
      <td>The numbers that appear most often in the array</td>
      <td><pre lang="json">[
  1,
  2,
  3
]</pre></td>
    </tr>    <tr>
      <td>modeFrequency</td>
      <td>number</td>
      <td>The number of times the most frequently occurring numbers appear</td>
      <td><pre lang="json">1</pre></td>
    </tr>    <tr>
      <td>standardDeviation</td>
      <td>number</td>
      <td>Measure of the amount of variation or dispersion of the items in the array</td>
      <td><pre lang="json">0.82915619758885</pre></td>
    </tr>    <tr>
      <td>variance</td>
      <td>number</td>
      <td>Measure of how far the array items are spread out from the arithmetic mean</td>
      <td><pre lang="json">0.6875</pre></td>
    </tr>    <tr>
      <td>valuesIgnored</td>
      <td>array</td>
      <td>Items of the array that were either not a number or a parsable string and were ignored from all calculations</td>
      <td><pre lang="json">[]</pre></td>
    </tr>    <tr>
      <td>valuesUsed</td>
      <td>array</td>
      <td>Items of the array that were either a number or a parsable string and were used for all calculations</td>
      <td><pre lang="json">[
  1,
  2,
  3
]</pre></td>
    </tr>    <tr>
      <td>valuesUsed-converted</td>
      <td>array</td>
      <td>The parsed form of all items in valuesUsed</td>
      <td><pre lang="json">[
  1,
  2,
  3
]</pre></td>
    </tr>
  </tbody>
</table>



#### Query Output

There are no query output examples for **Aggregate Functions for Arrays - IAP**.




#### Example Inputs and Outputs

  
##### Example 1

    
Input:
<pre>{
  "groupedArray": [
    1,
    2,
    3
  ]
} </pre>

    
    
Output:
<pre>{
  "sum": 6,
  "maximum": 3,
  "minimum": 1,
  "range": 2,
  "count": 3,
  "arithmeticMean": 2,
  "geometricMean": 1.8171205928321397,
  "product": 6,
  "harmonicMean": 1.6363636363636365,
  "median": 2,
  "mode": [
    1,
    2,
    3
  ],
  "modeFrequency": 1,
  "standardDeviation": 0.816496580927726,
  "variance": 0.6666666666666666,
  "valuesIgnored": [],
  "valuesUsed": [
    1,
    2,
    3
  ],
  "valuesUsed-converted": [
    1,
    2,
    3
  ]
} </pre>

    
  


#### API Links
As noted on the JSON Schema Transformation (JST) Designer documentation for [Using a Method](https://docs.itential.com/docs/jst-designer-2023-1#using-a-method), select the information `(i)` icon in the header of the method to be redirected to the [Mozilla Developer Network JavaScript reference documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference) for the method. 

<table>
  <thead>
    <tr>
      <th>API Name</th>
      <th>API Documentation Link</th>
      <th>API Link Visibility</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>IAP JSON Schema Transformation (JST) Designer</td>
      <td><a href="https://docs.itential.com/docs/jst-designer-2023-1">https://docs.itential.com/docs/jst-designer-2023-1</a></td>
      <td>Public</td>
    </tr>    <tr>
      <td>Using Transformations in IAP Workflows</td>
      <td><a href="https://docs.itential.com/docs/transformation-options-4">https://docs.itential.com/docs/transformation-options-4</a></td>
      <td>Public</td>
    </tr>
  </tbody>
</table>



---
### <ins>Allocate One Number - IAP</ins>
Find the first available number from an array of already allocated integers given a starting integer and an ending integer

Capabilities include:
- This transformation allows IAP users to find the first available number from an array of already allocated integers given a starting integer and an ending integer







#### Entry Point IAP Component

The primary IAP component to run **Allocate One Number - IAP** is listed below:

<table>
  <thead>
    <tr>
      <th>IAP Component Name</th>
      <th>IAP Component Type</th>
    </tr>
  </thead>
  <tbody>
      <td>Allocate One Number - IAP</td>
      <td>Transformation</td>
    </tr>
  </tbody>
</table>

#### Inputs

The following table lists the inputs for **Allocate One Number - IAP**:

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Required</th>
      <th>Description</th>
      <th>Example Value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>allocated</td>
      <td>array</td>
      <td>yes</td>
      <td>Array of already allocated integers</td>
      <td><pre lang="json">[
  1,
  4,
  5
]</pre></td>
    </tr>    <tr>
      <td>startRange</td>
      <td>integer</td>
      <td>yes</td>
      <td>Lower bound (inclusive) for the range between which a number is allocated</td>
      <td><pre lang="json">5</pre></td>
    </tr>    <tr>
      <td>endRange</td>
      <td>integer</td>
      <td>yes</td>
      <td>Upper bound (exclusive) for the range between which a number is allocated</td>
      <td><pre lang="json">8</pre></td>
    </tr>
  </tbody>
</table>



#### Outputs

The following table lists the outputs for **Allocate One Number - IAP**:

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Description</th>
      <th>Example Value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>assigned</td>
      <td>['integer', 'boolean']</td>
      <td>The first available number if found. Otherwise, it will be false</td>
      <td><pre lang="json">6</pre></td>
    </tr>
  </tbody>
</table>



#### Query Output

There are no query output examples for **Allocate One Number - IAP**.




#### Example Inputs and Outputs

  
##### Example 1

    
Input:
<pre>{
  "allocated": [
    1,
    4,
    5
  ],
  "startRange": 5,
  "endRange": 8
} </pre>

    
    
Output:
<pre>{
  "assigned": 6
} </pre>

    
  
##### Example 2

    
Input:
<pre>{
  "allocated": [
    1
  ],
  "startRange": 2,
  "endRange": 2
} </pre>

    
    
Output:
<pre>{
  "assigned": false
} </pre>

    
  


#### API Links
As noted on the JSON Schema Transformation (JST) Designer documentation for [Using a Method](https://docs.itential.com/docs/jst-designer-2023-1#using-a-method), select the information `(i)` icon in the header of the method to be redirected to the [Mozilla Developer Network JavaScript reference documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference) for the method. 

<table>
  <thead>
    <tr>
      <th>API Name</th>
      <th>API Documentation Link</th>
      <th>API Link Visibility</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>IAP JSON Schema Transformation (JST) Designer</td>
      <td><a href="https://docs.itential.com/docs/jst-designer-2023-1">https://docs.itential.com/docs/jst-designer-2023-1</a></td>
      <td>Public</td>
    </tr>    <tr>
      <td>Using Transformations in IAP Workflows</td>
      <td><a href="https://docs.itential.com/docs/transformation-options-4">https://docs.itential.com/docs/transformation-options-4</a></td>
      <td>Public</td>
    </tr>
  </tbody>
</table>



---
### <ins>Allocate a Pair of Numbers - IAP</ins>
Find the first available consecutive pair of numbers from an array of already allocated integers given a starting integer and an ending integer

Capabilities include:
- This transformation allows IAP users to find the first available consecutive pair of numbers from an array of already allocated integers given a starting integer and an ending integer







#### Entry Point IAP Component

The primary IAP component to run **Allocate a Pair of Numbers - IAP** is listed below:

<table>
  <thead>
    <tr>
      <th>IAP Component Name</th>
      <th>IAP Component Type</th>
    </tr>
  </thead>
  <tbody>
      <td>Allocate a Pair of Numbers - IAP</td>
      <td>Transformation</td>
    </tr>
  </tbody>
</table>

#### Inputs

The following table lists the inputs for **Allocate a Pair of Numbers - IAP**:

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Required</th>
      <th>Description</th>
      <th>Example Value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>allocated</td>
      <td>array</td>
      <td>yes</td>
      <td>Array of already allocated integers</td>
      <td><pre lang="json">[
  1,
  4,
  5
]</pre></td>
    </tr>    <tr>
      <td>startRange</td>
      <td>integer</td>
      <td>yes</td>
      <td>Lower bound (inclusive) for the range between which a pair of numbers is allocated</td>
      <td><pre lang="json">5</pre></td>
    </tr>    <tr>
      <td>endRange</td>
      <td>integer</td>
      <td>yes</td>
      <td>Upper bound (inclusive) for the range between which a pair of numbers is allocated</td>
      <td><pre lang="json">8</pre></td>
    </tr>
  </tbody>
</table>



#### Outputs

The following table lists the outputs for **Allocate a Pair of Numbers - IAP**:

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Description</th>
      <th>Example Value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>assigned</td>
      <td>['array', 'boolean']</td>
      <td>An array of the first availble consecutive pair if found. Otherwise, it will be false</td>
      <td><pre lang="json">[
  6,
  7
]</pre></td>
    </tr>
  </tbody>
</table>



#### Query Output

There are no query output examples for **Allocate a Pair of Numbers - IAP**.




#### Example Inputs and Outputs

  
##### Example 1

    
Input:
<pre>{
  "allocated": [
    1,
    4,
    5
  ],
  "startRange": 5,
  "endRange": 8
} </pre>

    
    
Output:
<pre>{
  "assigned": [
    6,
    7
  ]
} </pre>

    
  
##### Example 2

    
Input:
<pre>{
  "allocated": [
    1,
    4,
    5,
    7
  ],
  "startRange": 5,
  "endRange": 8
} </pre>

    
    
Output:
<pre>{
  "assigned": false
} </pre>

    
  


#### API Links
As noted on the JSON Schema Transformation (JST) Designer documentation for [Using a Method](https://docs.itential.com/docs/jst-designer-2023-1#using-a-method), select the information `(i)` icon in the header of the method to be redirected to the [Mozilla Developer Network JavaScript reference documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference) for the method. 

<table>
  <thead>
    <tr>
      <th>API Name</th>
      <th>API Documentation Link</th>
      <th>API Link Visibility</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>IAP JSON Schema Transformation (JST) Designer</td>
      <td><a href="https://docs.itential.com/docs/jst-designer-2023-1">https://docs.itential.com/docs/jst-designer-2023-1</a></td>
      <td>Public</td>
    </tr>    <tr>
      <td>Using Transformations in IAP Workflows</td>
      <td><a href="https://docs.itential.com/docs/transformation-options-4">https://docs.itential.com/docs/transformation-options-4</a></td>
      <td>Public</td>
    </tr>
  </tbody>
</table>



---
### <ins>Chunk Array - IAP</ins>
Split an array into a smaller sized groups given a desired chunk size

Capabilities include:
- This transformation allows IAP users to split an array into a smaller sized groups given a desired chunk size







#### Entry Point IAP Component

The primary IAP component to run **Chunk Array - IAP** is listed below:

<table>
  <thead>
    <tr>
      <th>IAP Component Name</th>
      <th>IAP Component Type</th>
    </tr>
  </thead>
  <tbody>
      <td>Chunk Array - IAP</td>
      <td>Transformation</td>
    </tr>
  </tbody>
</table>

#### Inputs

The following table lists the inputs for **Chunk Array - IAP**:

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Required</th>
      <th>Description</th>
      <th>Example Value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>originalArray</td>
      <td>array</td>
      <td>yes</td>
      <td>An array that needs to be splitted in chunks</td>
      <td><pre lang="json">[
  1,
  2,
  3,
  "a",
  "b"
]</pre></td>
    </tr>    <tr>
      <td>chunkSize</td>
      <td>number</td>
      <td>yes</td>
      <td>The size of each chunk when splitting an array</td>
      <td><pre lang="json">3</pre></td>
    </tr>
  </tbody>
</table>



#### Outputs

The following table lists the outputs for **Chunk Array - IAP**:

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Description</th>
      <th>Example Value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>splitArray</td>
      <td>array</td>
      <td>The array that has been splitted in chunks</td>
      <td><pre lang="json">[
  [
    1,
    2,
    3
  ],
  [
    "a",
    "b"
  ]
]</pre></td>
    </tr>
  </tbody>
</table>



#### Query Output

There are no query output examples for **Chunk Array - IAP**.




#### Example Inputs and Outputs

  
##### Example 1

    
Input:
<pre>{
  "originalArray": [
    1,
    2,
    3,
    "a",
    "b"
  ],
  "chunkSize": 3
} </pre>

    
    
Output:
<pre>[
  [
    1,
    2,
    3
  ],
  [
    "a",
    "b"
  ]
] </pre>

    
  


#### API Links
As noted on the JSON Schema Transformation (JST) Designer documentation for [Using a Method](https://docs.itential.com/docs/jst-designer-2023-1#using-a-method), select the information `(i)` icon in the header of the method to be redirected to the [Mozilla Developer Network JavaScript reference documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference) for the method. 

<table>
  <thead>
    <tr>
      <th>API Name</th>
      <th>API Documentation Link</th>
      <th>API Link Visibility</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>IAP JSON Schema Transformation (JST) Designer</td>
      <td><a href="https://docs.itential.com/docs/jst-designer-2023-1">https://docs.itential.com/docs/jst-designer-2023-1</a></td>
      <td>Public</td>
    </tr>    <tr>
      <td>Using Transformations in IAP Workflows</td>
      <td><a href="https://docs.itential.com/docs/transformation-options-4">https://docs.itential.com/docs/transformation-options-4</a></td>
      <td>Public</td>
    </tr>
  </tbody>
</table>



---
### <ins>Clear Empty Keys - IAP</ins>
Clear empty keys from a JSON

Capabilities include:
- This transformation allows IAP users to clear empty keys from a JSON input. Empty keys consist of empty objects, empty arrays, empty strings, and null values







#### Entry Point IAP Component

The primary IAP component to run **Clear Empty Keys - IAP** is listed below:

<table>
  <thead>
    <tr>
      <th>IAP Component Name</th>
      <th>IAP Component Type</th>
    </tr>
  </thead>
  <tbody>
      <td>Clear Empty Keys - IAP</td>
      <td>Transformation</td>
    </tr>
  </tbody>
</table>

#### Inputs

The following table lists the inputs for **Clear Empty Keys - IAP**:

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Required</th>
      <th>Description</th>
      <th>Example Value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>input</td>
      <td>object</td>
      <td>yes</td>
      <td>An object that needs to be cleaned</td>
      <td><pre lang="json">{
  "name": "John",
  "age": "30",
  "address": {},
  "hobbies": []
}</pre></td>
    </tr>
  </tbody>
</table>



#### Outputs

The following table lists the outputs for **Clear Empty Keys - IAP**:

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Description</th>
      <th>Example Value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>output</td>
      <td>object</td>
      <td>Clean object without empty keys</td>
      <td><pre lang="json">{
  "name": "John",
  "age": "30"
}</pre></td>
    </tr>
  </tbody>
</table>



#### Query Output

There are no query output examples for **Clear Empty Keys - IAP**.




#### Example Inputs and Outputs

  
##### Example 1

    
Input:
<pre>{
  "input": {
    "name": "John",
    "age": "30",
    "address": {},
    "hobbies": []
  }
} </pre>

    
    
Output:
<pre>{
  "name": "John",
  "age": "30"
} </pre>

    
  


#### API Links
As noted on the JSON Schema Transformation (JST) Designer documentation for [Using a Method](https://docs.itential.com/docs/jst-designer-2023-1#using-a-method), select the information `(i)` icon in the header of the method to be redirected to the [Mozilla Developer Network JavaScript reference documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference) for the method. 

<table>
  <thead>
    <tr>
      <th>API Name</th>
      <th>API Documentation Link</th>
      <th>API Link Visibility</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>IAP JSON Schema Transformation (JST) Designer</td>
      <td><a href="https://docs.itential.com/docs/jst-designer-2023-1">https://docs.itential.com/docs/jst-designer-2023-1</a></td>
      <td>Public</td>
    </tr>    <tr>
      <td>Using Transformations in IAP Workflows</td>
      <td><a href="https://docs.itential.com/docs/transformation-options-4">https://docs.itential.com/docs/transformation-options-4</a></td>
      <td>Public</td>
    </tr>
  </tbody>
</table>



---
### <ins>Convert CSV to JSON - IAP</ins>
Convert CSV into JSON

Capabilities include:
- This transformation allows IAP users to convert a CSV into a JSON







#### Entry Point IAP Component

The primary IAP component to run **Convert CSV to JSON - IAP** is listed below:

<table>
  <thead>
    <tr>
      <th>IAP Component Name</th>
      <th>IAP Component Type</th>
    </tr>
  </thead>
  <tbody>
      <td>Convert CSV to JSON - IAP</td>
      <td>Transformation</td>
    </tr>
  </tbody>
</table>

#### Inputs

The following table lists the inputs for **Convert CSV to JSON - IAP**:

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Required</th>
      <th>Description</th>
      <th>Example Value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>csv</td>
      <td>string</td>
      <td>yes</td>
      <td>CSV to convert to JSON</td>
      <td><pre lang="json">a,b,c,d,e,f
1,2,3,4,5,7,8,9,0
5,4,3,2,1
1,2,3,4,5</pre></td>
    </tr>
  </tbody>
</table>



#### Outputs

The following table lists the outputs for **Convert CSV to JSON - IAP**:

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Description</th>
      <th>Example Value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>json</td>
      <td>array</td>
      <td>JSON format of the CSV</td>
      <td><pre lang="json">[
  {
    "a": "1",
    "b": "2",
    "c": "3",
    "d": "4",
    "e": "5",
    "f": "7"
  },
  {
    "a": "5",
    "b": "4",
    "c": "3",
    "d": "2",
    "e": "1",
    "f": ""
  },
  {
    "a": "1",
    "b": "2",
    "c": "3",
    "d": "4",
    "e": "5",
    "f": ""
  }
]</pre></td>
    </tr>
  </tbody>
</table>



#### Query Output

There are no query output examples for **Convert CSV to JSON - IAP**.




#### Example Inputs and Outputs

  
##### Example 1

    
Input:
<pre>{
  "csv": "a,b,c,d,e,f\n1,2,3,4,5,7,8,9,0\n5,4,3,2,1\n1,2,3,4,5"
} </pre>

    
    
Output:
<pre>[
  {
    "a": "1",
    "b": "2",
    "c": "3",
    "d": "4",
    "e": "5",
    "f": "7"
  },
  {
    "a": "5",
    "b": "4",
    "c": "3",
    "d": "2",
    "e": "1",
    "f": ""
  },
  {
    "a": "1",
    "b": "2",
    "c": "3",
    "d": "4",
    "e": "5",
    "f": ""
  }
] </pre>

    
  


#### API Links
As noted on the JSON Schema Transformation (JST) Designer documentation for [Using a Method](https://docs.itential.com/docs/jst-designer-2023-1#using-a-method), select the information `(i)` icon in the header of the method to be redirected to the [Mozilla Developer Network JavaScript reference documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference) for the method. 

<table>
  <thead>
    <tr>
      <th>API Name</th>
      <th>API Documentation Link</th>
      <th>API Link Visibility</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>IAP JSON Schema Transformation (JST) Designer</td>
      <td><a href="https://docs.itential.com/docs/jst-designer-2023-1">https://docs.itential.com/docs/jst-designer-2023-1</a></td>
      <td>Public</td>
    </tr>    <tr>
      <td>Using Transformations in IAP Workflows</td>
      <td><a href="https://docs.itential.com/docs/transformation-options-4">https://docs.itential.com/docs/transformation-options-4</a></td>
      <td>Public</td>
    </tr>
  </tbody>
</table>



---
### <ins>Convert String to Special Cases - IAP</ins>
Convert string to special cases including camelCase, PascalCase, kebab-case, and snake_case

Capabilities include:
- This transformation allows IAP users to convert a string separated by whitespace to camelCase, PascalCase, kebab-case, and snake_case







#### Entry Point IAP Component

The primary IAP component to run **Convert String to Special Cases - IAP** is listed below:

<table>
  <thead>
    <tr>
      <th>IAP Component Name</th>
      <th>IAP Component Type</th>
    </tr>
  </thead>
  <tbody>
      <td>Convert String to Special Cases - IAP</td>
      <td>Transformation</td>
    </tr>
  </tbody>
</table>

#### Inputs

The following table lists the inputs for **Convert String to Special Cases - IAP**:

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Required</th>
      <th>Description</th>
      <th>Example Value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>incomingString</td>
      <td>string</td>
      <td>yes</td>
      <td>A string separated by whitespace</td>
      <td><pre lang="json">foo bar foobar</pre></td>
    </tr>
  </tbody>
</table>



#### Outputs

The following table lists the outputs for **Convert String to Special Cases - IAP**:

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Description</th>
      <th>Example Value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>toCamelCase</td>
      <td>string</td>
      <td>Camel case which has no interventing spaces or underscores, and all words except the first one starting with a capital letter</td>
      <td><pre lang="json">fooBarFoobar</pre></td>
    </tr>    <tr>
      <td>toSnakeCase</td>
      <td>string</td>
      <td>Snake case which has spaces replaced by underscores</td>
      <td><pre lang="json">foo_bar_foobar</pre></td>
    </tr>    <tr>
      <td>toKebabCase</td>
      <td>string</td>
      <td>Kebab case which has spaces replaced by hyphens</td>
      <td><pre lang="json">foo-bar-foobar</pre></td>
    </tr>    <tr>
      <td>toPascalCase</td>
      <td>string</td>
      <td>Pascal case which has all words starting with a capital letter</td>
      <td><pre lang="json">FooBarFoobar</pre></td>
    </tr>
  </tbody>
</table>



#### Query Output

There are no query output examples for **Convert String to Special Cases - IAP**.




#### Example Inputs and Outputs

  
##### Example 1

    
Input:
<pre>{
  "incomingString": "foo bar foobar"
} </pre>

    
    
Output:
<pre>{
  "toCamelCase": "fooBarFoobar",
  "toSnakeCase": "foo_bar_foobar",
  "toKebabCase": "foo-bar-foobar",
  "toPascalCase": "FooBarFoobar"
} </pre>

    
  


#### API Links
As noted on the JSON Schema Transformation (JST) Designer documentation for [Using a Method](https://docs.itential.com/docs/jst-designer-2023-1#using-a-method), select the information `(i)` icon in the header of the method to be redirected to the [Mozilla Developer Network JavaScript reference documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference) for the method. 

<table>
  <thead>
    <tr>
      <th>API Name</th>
      <th>API Documentation Link</th>
      <th>API Link Visibility</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>IAP JSON Schema Transformation (JST) Designer</td>
      <td><a href="https://docs.itential.com/docs/jst-designer-2023-1">https://docs.itential.com/docs/jst-designer-2023-1</a></td>
      <td>Public</td>
    </tr>    <tr>
      <td>Using Transformations in IAP Workflows</td>
      <td><a href="https://docs.itential.com/docs/transformation-options-4">https://docs.itential.com/docs/transformation-options-4</a></td>
      <td>Public</td>
    </tr>
  </tbody>
</table>



---
### <ins>Filter Array of Objects by Key Value Pair - IAP</ins>
Filter array of objects by key value pair

Capabilities include:
- This transformation allows IAP users to filter an array of objects by providing a key and a value to match on, and the option to discard the matching items from the array







#### Entry Point IAP Component

The primary IAP component to run **Filter Array of Objects by Key Value Pair - IAP** is listed below:

<table>
  <thead>
    <tr>
      <th>IAP Component Name</th>
      <th>IAP Component Type</th>
    </tr>
  </thead>
  <tbody>
      <td>Filter Array of Objects by Key Value Pair - IAP</td>
      <td>Transformation</td>
    </tr>
  </tbody>
</table>

#### Inputs

The following table lists the inputs for **Filter Array of Objects by Key Value Pair - IAP**:

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Required</th>
      <th>Description</th>
      <th>Example Value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>filterableArray</td>
      <td>array</td>
      <td>yes</td>
      <td>An array of objects</td>
      <td><pre lang="json">[
  {
    "city": "Atlanta",
    "state": "GA"
  },
  {
    "city": "Sandy Springs",
    "state": "GA"
  },
  {
    "city": "Dallas",
    "state": "TX"
  },
  {
    "city": "Orlando",
    "state": "FL"
  }
]</pre></td>
    </tr>    <tr>
      <td>keyToFilterOn</td>
      <td>string</td>
      <td>yes</td>
      <td>Key to match on</td>
      <td><pre lang="json">state</pre></td>
    </tr>    <tr>
      <td>valueToFind</td>
      <td>['string', 'number', 'boolean', 'array', 'object', 'null']</td>
      <td>yes</td>
      <td>Value of the key to match on</td>
      <td><pre lang="json">GA</pre></td>
    </tr>    <tr>
      <td>discardMatching</td>
      <td>boolean</td>
      <td>yes</td>
      <td>Whether to remove matching items from the array or not</td>
      <td><pre lang="json">true</pre></td>
    </tr>
  </tbody>
</table>



#### Outputs

The following table lists the outputs for **Filter Array of Objects by Key Value Pair - IAP**:

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Description</th>
      <th>Example Value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>filteredArray</td>
      <td>array</td>
      <td>Either an array of matching items if discardMatching is set to false, or an array of unmatching items if discardMatching is set to true</td>
      <td><pre lang="json">[
  {
    "city": "Dallas",
    "state": "TX"
  },
  {
    "city": "Orlando",
    "state": "FL"
  }
]</pre></td>
    </tr>    <tr>
      <td>firstFilteredElement</td>
      <td>object</td>
      <td>First item in the filtered array</td>
      <td><pre lang="json">{
  "city": "Dallas",
  "state": "TX"
}</pre></td>
    </tr>
  </tbody>
</table>



#### Query Output

There are no query output examples for **Filter Array of Objects by Key Value Pair - IAP**.




#### Example Inputs and Outputs

  
##### Example 1

    
Input:
<pre>{
  "filterableArray": [
    {
      "city": "Atlanta",
      "state": "GA"
    },
    {
      "city": "Sandy Springs",
      "state": "GA"
    },
    {
      "city": "Dallas",
      "state": "TX"
    },
    {
      "city": "Orlando",
      "state": "FL"
    }
  ],
  "keyToFilterOn": "state",
  "valueToFind": "GA",
  "discardMatching": true
} </pre>

    
    
Output:
<pre>{
  "filteredArray": [
    {
      "city": "Dallas",
      "state": "TX"
    },
    {
      "city": "Orlando",
      "state": "FL"
    }
  ],
  "firstFilteredElement": {
    "city": "Dallas",
    "state": "TX"
  }
} </pre>

    
  
##### Example 2

    
Input:
<pre>{
  "filterableArray": [
    {
      "city": "Atlanta",
      "state": "GA"
    },
    {
      "city": "Sandy Springs",
      "state": "GA"
    },
    {
      "city": "Dallas",
      "state": "TX"
    },
    {
      "city": "Orlando",
      "state": "FL"
    }
  ],
  "keyToFilterOn": "state",
  "valueToFind": "GA",
  "discardMatching": false
} </pre>

    
    
Output:
<pre>{
  "filteredArray": [
    {
      "city": "Atlanta",
      "state": "GA"
    },
    {
      "city": "Sandy Springs",
      "state": "GA"
    }
  ],
  "firstFilteredElement": {
    "city": "Atlanta",
    "state": "GA"
  }
} </pre>

    
  


#### API Links
As noted on the JSON Schema Transformation (JST) Designer documentation for [Using a Method](https://docs.itential.com/docs/jst-designer-2023-1#using-a-method), select the information `(i)` icon in the header of the method to be redirected to the [Mozilla Developer Network JavaScript reference documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference) for the method. 

<table>
  <thead>
    <tr>
      <th>API Name</th>
      <th>API Documentation Link</th>
      <th>API Link Visibility</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>IAP JSON Schema Transformation (JST) Designer</td>
      <td><a href="https://docs.itential.com/docs/jst-designer-2023-1">https://docs.itential.com/docs/jst-designer-2023-1</a></td>
      <td>Public</td>
    </tr>    <tr>
      <td>Using Transformations in IAP Workflows</td>
      <td><a href="https://docs.itential.com/docs/transformation-options-4">https://docs.itential.com/docs/transformation-options-4</a></td>
      <td>Public</td>
    </tr>
  </tbody>
</table>



---
### <ins>Generate Random Integer Within Range - IAP</ins>
Generate a random integer within a range

Capabilities include:
- This transformation allows IAP users to generate a random integer within a provided range (inclusive of both min and max)







#### Entry Point IAP Component

The primary IAP component to run **Generate Random Integer Within Range - IAP** is listed below:

<table>
  <thead>
    <tr>
      <th>IAP Component Name</th>
      <th>IAP Component Type</th>
    </tr>
  </thead>
  <tbody>
      <td>Generate Random Integer Within Range - IAP</td>
      <td>Transformation</td>
    </tr>
  </tbody>
</table>

#### Inputs

The following table lists the inputs for **Generate Random Integer Within Range - IAP**:

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Required</th>
      <th>Description</th>
      <th>Example Value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>minimum</td>
      <td>integer</td>
      <td>yes</td>
      <td>Lower bound (inclusive) for the range between which a random integer will be generated</td>
      <td><pre lang="json">2</pre></td>
    </tr>    <tr>
      <td>maximum</td>
      <td>integer</td>
      <td>yes</td>
      <td>Upper bound (inclusive) for the range between which a random integer will be generated</td>
      <td><pre lang="json">5</pre></td>
    </tr>
  </tbody>
</table>



#### Outputs

The following table lists the outputs for **Generate Random Integer Within Range - IAP**:

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Description</th>
      <th>Example Value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>randomInteger</td>
      <td>integer</td>
      <td>Randomly generated integer</td>
      <td><pre lang="json">2</pre></td>
    </tr>
  </tbody>
</table>



#### Query Output

There are no query output examples for **Generate Random Integer Within Range - IAP**.




#### Example Inputs and Outputs

  
##### Example 1

    
Input:
<pre>{
  "minimum": 2,
  "maximum": 5
} </pre>

    
    
Output:
<pre>2 </pre>

    
  


#### API Links
As noted on the JSON Schema Transformation (JST) Designer documentation for [Using a Method](https://docs.itential.com/docs/jst-designer-2023-1#using-a-method), select the information `(i)` icon in the header of the method to be redirected to the [Mozilla Developer Network JavaScript reference documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference) for the method. 

<table>
  <thead>
    <tr>
      <th>API Name</th>
      <th>API Documentation Link</th>
      <th>API Link Visibility</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>IAP JSON Schema Transformation (JST) Designer</td>
      <td><a href="https://docs.itential.com/docs/jst-designer-2023-1">https://docs.itential.com/docs/jst-designer-2023-1</a></td>
      <td>Public</td>
    </tr>    <tr>
      <td>Using Transformations in IAP Workflows</td>
      <td><a href="https://docs.itential.com/docs/transformation-options-4">https://docs.itential.com/docs/transformation-options-4</a></td>
      <td>Public</td>
    </tr>
  </tbody>
</table>



---
### <ins>Get Random Element From Array - IAP</ins>
Get a random element from array

Capabilities include:
- This transformation allows IAP users to get a random element from an array







#### Entry Point IAP Component

The primary IAP component to run **Get Random Element From Array - IAP** is listed below:

<table>
  <thead>
    <tr>
      <th>IAP Component Name</th>
      <th>IAP Component Type</th>
    </tr>
  </thead>
  <tbody>
      <td>Get Random Element From Array - IAP</td>
      <td>Transformation</td>
    </tr>
  </tbody>
</table>

#### Inputs

The following table lists the inputs for **Get Random Element From Array - IAP**:

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Required</th>
      <th>Description</th>
      <th>Example Value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>array</td>
      <td>array</td>
      <td>yes</td>
      <td>Array from which a random element has to be selected</td>
      <td><pre lang="json">[
  {
    "city": "Atlanta",
    "state": "GA"
  },
  {
    "city": "Sandy Springs",
    "state": "GA"
  },
  {
    "city": "Dallas",
    "state": "TX"
  },
  {
    "city": "Orlando",
    "state": "FL"
  }
]</pre></td>
    </tr>
  </tbody>
</table>



#### Outputs

The following table lists the outputs for **Get Random Element From Array - IAP**:

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Description</th>
      <th>Example Value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>arrayWithoutElement</td>
      <td>array</td>
      <td>Array without the randomly selected element</td>
      <td><pre lang="json">[
  {
    "city": "Sandy Springs",
    "state": "GA"
  },
  {
    "city": "Dallas",
    "state": "TX"
  },
  {
    "city": "Orlando",
    "state": "FL"
  }
]</pre></td>
    </tr>    <tr>
      <td>randomElement</td>
      <td>['number', 'string', 'boolean', 'array', 'object', 'null']</td>
      <td>Randomly selected element</td>
      <td><pre lang="json">{
  "city": "Atlanta",
  "state": "GA"
}</pre></td>
    </tr>    <tr>
      <td>randomElementIndex</td>
      <td>integer</td>
      <td>Index of the randomly selected element</td>
      <td><pre lang="json">0</pre></td>
    </tr>    <tr>
      <td>poppedArrayLength</td>
      <td>integer</td>
      <td>Length of the array without the randomly selected element</td>
      <td><pre lang="json">3</pre></td>
    </tr>
  </tbody>
</table>



#### Query Output

There are no query output examples for **Get Random Element From Array - IAP**.




#### Example Inputs and Outputs

  
##### Example 1

    
Input:
<pre>{
  "array": [
    {
      "city": "Atlanta",
      "state": "GA"
    },
    {
      "city": "Sandy Springs",
      "state": "GA"
    },
    {
      "city": "Dallas",
      "state": "TX"
    },
    {
      "city": "Orlando",
      "state": "FL"
    }
  ]
} </pre>

    
    
Output:
<pre>{
  "arrayWithoutElement": [
    {
      "city": "Sandy Springs",
      "state": "GA"
    },
    {
      "city": "Dallas",
      "state": "TX"
    },
    {
      "city": "Orlando",
      "state": "FL"
    }
  ],
  "randomElement": {
    "city": "Atlanta",
    "state": "GA"
  },
  "randomElementIndex": 0,
  "poppedArrayLength": 3
} </pre>

    
  


#### API Links
As noted on the JSON Schema Transformation (JST) Designer documentation for [Using a Method](https://docs.itential.com/docs/jst-designer-2023-1#using-a-method), select the information `(i)` icon in the header of the method to be redirected to the [Mozilla Developer Network JavaScript reference documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference) for the method. 

<table>
  <thead>
    <tr>
      <th>API Name</th>
      <th>API Documentation Link</th>
      <th>API Link Visibility</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>IAP JSON Schema Transformation (JST) Designer</td>
      <td><a href="https://docs.itential.com/docs/jst-designer-2023-1">https://docs.itential.com/docs/jst-designer-2023-1</a></td>
      <td>Public</td>
    </tr>    <tr>
      <td>Using Transformations in IAP Workflows</td>
      <td><a href="https://docs.itential.com/docs/transformation-options-4">https://docs.itential.com/docs/transformation-options-4</a></td>
      <td>Public</td>
    </tr>
  </tbody>
</table>



---
### <ins>Get Value From JSON Pointer - IAP</ins>
Get a value from an object using JSON Pointer

Capabilities include:
- This transformation allows IAP users to get a value from an object based on the JSON Pointer







#### Entry Point IAP Component

The primary IAP component to run **Get Value From JSON Pointer - IAP** is listed below:

<table>
  <thead>
    <tr>
      <th>IAP Component Name</th>
      <th>IAP Component Type</th>
    </tr>
  </thead>
  <tbody>
      <td>Get Value From JSON Pointer - IAP</td>
      <td>Transformation</td>
    </tr>
  </tbody>
</table>

#### Inputs

The following table lists the inputs for **Get Value From JSON Pointer - IAP**:

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Required</th>
      <th>Description</th>
      <th>Example Value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>jsonPointer</td>
      <td>string</td>
      <td>yes</td>
      <td>A string that provides a reference to a specific value within a JSON document</td>
      <td><pre lang="json">/a/b</pre></td>
    </tr>    <tr>
      <td>obj</td>
      <td>object</td>
      <td>yes</td>
      <td>Object to get value from</td>
      <td><pre lang="json">{
  "a": {
    "b": 2,
    "c": 3
  }
}</pre></td>
    </tr>
  </tbody>
</table>



#### Outputs

The following table lists the outputs for **Get Value From JSON Pointer - IAP**:

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Description</th>
      <th>Example Value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>value</td>
      <td>array, boolean, string, number, object, null</td>
      <td>The value obtained using JSON pointer</td>
      <td><pre lang="json">2</pre></td>
    </tr>
  </tbody>
</table>



#### Query Output

There are no query output examples for **Get Value From JSON Pointer - IAP**.




#### Example Inputs and Outputs

  
##### Example 1

    
Input:
<pre>{
  "jsonPointer": "/a/b",
  "obj": {
    "a": {
      "b": 2,
      "c": 3
    }
  }
} </pre>

    
    
Output:
<pre>2 </pre>

    
  


#### API Links
As noted on the JSON Schema Transformation (JST) Designer documentation for [Using a Method](https://docs.itential.com/docs/jst-designer-2023-1#using-a-method), select the information `(i)` icon in the header of the method to be redirected to the [Mozilla Developer Network JavaScript reference documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference) for the method. 

<table>
  <thead>
    <tr>
      <th>API Name</th>
      <th>API Documentation Link</th>
      <th>API Link Visibility</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>IAP JSON Schema Transformation (JST) Designer</td>
      <td><a href="https://docs.itential.com/docs/jst-designer-2023-1">https://docs.itential.com/docs/jst-designer-2023-1</a></td>
      <td>Public</td>
    </tr>    <tr>
      <td>Using Transformations in IAP Workflows</td>
      <td><a href="https://docs.itential.com/docs/transformation-options-4">https://docs.itential.com/docs/transformation-options-4</a></td>
      <td>Public</td>
    </tr>
  </tbody>
</table>



---
### <ins>Group Records by Property - IAP</ins>
Group records by a property

Capabilities include:
- This transformation allows IAP users to group records by a specific property







#### Entry Point IAP Component

The primary IAP component to run **Group Records by Property - IAP** is listed below:

<table>
  <thead>
    <tr>
      <th>IAP Component Name</th>
      <th>IAP Component Type</th>
    </tr>
  </thead>
  <tbody>
      <td>Group Records by Property - IAP</td>
      <td>Transformation</td>
    </tr>
  </tbody>
</table>

#### Inputs

The following table lists the inputs for **Group Records by Property - IAP**:

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Required</th>
      <th>Description</th>
      <th>Example Value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>array</td>
      <td>array</td>
      <td>yes</td>
      <td>An array of objects</td>
      <td><pre lang="json">[
  {
    "fruit": "apple",
    "price": "42.2",
    "type": "fruit"
  },
  {
    "fruit": "banana",
    "price": "10.1",
    "type": "fruit"
  },
  {
    "fruit": "potato",
    "price": "20",
    "type": "vegetable"
  }
]</pre></td>
    </tr>    <tr>
      <td>groupByProperty</td>
      <td>string</td>
      <td>yes</td>
      <td>Property used to group the records</td>
      <td><pre lang="json">type</pre></td>
    </tr>
  </tbody>
</table>



#### Outputs

The following table lists the outputs for **Group Records by Property - IAP**:

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Description</th>
      <th>Example Value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>output</td>
      <td>object</td>
      <td>The grouped data object where the keys are unique values of the desired property, and the values are arrays containing records with the same property value</td>
      <td><pre lang="json">{
  "fruit": [
    {
      "fruit": "apple",
      "price": "42.2",
      "type": "fruit"
    },
    {
      "fruit": "banana",
      "price": "10.1",
      "type": "fruit"
    }
  ],
  "vegetable": [
    {
      "fruit": "potato",
      "price": "20",
      "type": "vegetable"
    }
  ]
}</pre></td>
    </tr>
  </tbody>
</table>



#### Query Output

There are no query output examples for **Group Records by Property - IAP**.




#### Example Inputs and Outputs

  
##### Example 1

    
Input:
<pre>{
  "array": [
    {
      "fruit": "apple",
      "price": "42.2",
      "type": "fruit"
    },
    {
      "fruit": "banana",
      "price": "10.1",
      "type": "fruit"
    },
    {
      "fruit": "potato",
      "price": "20",
      "type": "vegetable"
    }
  ],
  "groupByProperty": "type"
} </pre>

    
    
Output:
<pre>{
  "fruit": [
    {
      "fruit": "apple",
      "price": "42.2",
      "type": "fruit"
    },
    {
      "fruit": "banana",
      "price": "10.1",
      "type": "fruit"
    }
  ],
  "vegetable": [
    {
      "fruit": "potato",
      "price": "20",
      "type": "vegetable"
    }
  ]
} </pre>

    
  
##### Example 2

    
Input:
<pre>{
  "array": [
    {
      "number": 43,
      "president": "George W. Bush",
      "took_office": "2001-01-20",
      "left_office": "2009-01-20",
      "party": "Republican"
    },
    {
      "number": 44,
      "president": "Barack Obama",
      "took_office": "2009-01-20",
      "left_office": "2017-01-20",
      "party": "Democratic"
    },
    {
      "number": 45,
      "president": "Donald J. Trump",
      "took_office": "2017-01-20",
      "left_office": null,
      "party": "Republican"
    }
  ],
  "groupByProperty": "party"
} </pre>

    
    
Output:
<pre>{
  "Republican": [
    {
      "number": 43,
      "president": "George W. Bush",
      "took_office": "2001-01-20",
      "left_office": "2009-01-20",
      "party": "Republican"
    },
    {
      "number": 45,
      "president": "Donald J. Trump",
      "took_office": "2017-01-20",
      "left_office": null,
      "party": "Republican"
    }
  ],
  "Democratic": [
    {
      "number": 44,
      "president": "Barack Obama",
      "took_office": "2009-01-20",
      "left_office": "2017-01-20",
      "party": "Democratic"
    }
  ]
} </pre>

    
  


#### API Links
As noted on the JSON Schema Transformation (JST) Designer documentation for [Using a Method](https://docs.itential.com/docs/jst-designer-2023-1#using-a-method), select the information `(i)` icon in the header of the method to be redirected to the [Mozilla Developer Network JavaScript reference documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference) for the method. 

<table>
  <thead>
    <tr>
      <th>API Name</th>
      <th>API Documentation Link</th>
      <th>API Link Visibility</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>IAP JSON Schema Transformation (JST) Designer</td>
      <td><a href="https://docs.itential.com/docs/jst-designer-2023-1">https://docs.itential.com/docs/jst-designer-2023-1</a></td>
      <td>Public</td>
    </tr>    <tr>
      <td>Using Transformations in IAP Workflows</td>
      <td><a href="https://docs.itential.com/docs/transformation-options-4">https://docs.itential.com/docs/transformation-options-4</a></td>
      <td>Public</td>
    </tr>
  </tbody>
</table>



---
### <ins>Implement Set Operations on Arrays - IAP</ins>
Implement set operations on 2 arrays including union, intersection, set difference and symmetric difference

Capabilities include:
- This transformation allows IAP users to implement set operations on 2 arrays including union, intersection, set difference and symmetric difference







#### Entry Point IAP Component

The primary IAP component to run **Implement Set Operations on Arrays - IAP** is listed below:

<table>
  <thead>
    <tr>
      <th>IAP Component Name</th>
      <th>IAP Component Type</th>
    </tr>
  </thead>
  <tbody>
      <td>Implement Set Operations on Arrays - IAP</td>
      <td>Transformation</td>
    </tr>
  </tbody>
</table>

#### Inputs

The following table lists the inputs for **Implement Set Operations on Arrays - IAP**:

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Required</th>
      <th>Description</th>
      <th>Example Value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>array1</td>
      <td>array</td>
      <td>yes</td>
      <td>The first array which can contain elements of type arrays, numbers, integers, strings, or objects</td>
      <td><pre lang="json">[
  [
    1,
    3,
    4
  ],
  [
    1,
    3,
    4
  ],
  [
    1,
    2
  ],
  "apple"
]</pre></td>
    </tr>    <tr>
      <td>array2</td>
      <td>array</td>
      <td>yes</td>
      <td>The second array which can contain elements of type arrays, numbers, integers, strings, or objects</td>
      <td><pre lang="json">[
  [
    1,
    3,
    4
  ],
  [
    1,
    3,
    5
  ],
  "apple",
  99
]</pre></td>
    </tr>
  </tbody>
</table>



#### Outputs

The following table lists the outputs for **Implement Set Operations on Arrays - IAP**:

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Description</th>
      <th>Example Value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>intersection</td>
      <td>array</td>
      <td>Array containing elements common to both arrays</td>
      <td><pre lang="json">[
  [
    1,
    3,
    4
  ],
  "apple"
]</pre></td>
    </tr>    <tr>
      <td>array1Only</td>
      <td>array</td>
      <td>Array containing elements in "array1" but not in "array2"</td>
      <td><pre lang="json">[
  [
    1,
    2
  ]
]</pre></td>
    </tr>    <tr>
      <td>array2Only</td>
      <td>array</td>
      <td>Array containing elements in "array2" but not in "array1"</td>
      <td><pre lang="json">[
  [
    1,
    3,
    5
  ],
  99
]</pre></td>
    </tr>    <tr>
      <td>difference</td>
      <td>array</td>
      <td>Array containing elements that are present in either "array1" or "array2", but not in both</td>
      <td><pre lang="json">[
  [
    1,
    2
  ],
  [
    1,
    3,
    5
  ],
  99
]</pre></td>
    </tr>    <tr>
      <td>union</td>
      <td>array</td>
      <td>Array containing all unique elements from both arrays</td>
      <td><pre lang="json">[
  [
    1,
    3,
    4
  ],
  [
    1,
    2
  ],
  "apple",
  [
    1,
    3,
    5
  ],
  99
]</pre></td>
    </tr>
  </tbody>
</table>



#### Query Output

There are no query output examples for **Implement Set Operations on Arrays - IAP**.




#### Example Inputs and Outputs

  
##### Example 1

    
Input:
<pre>{
  "array1": [
    [
      1,
      3,
      4
    ],
    [
      1,
      3,
      4
    ],
    [
      1,
      2
    ],
    "apple"
  ],
  "array2": [
    [
      1,
      3,
      4
    ],
    [
      1,
      3,
      5
    ],
    "apple",
    99
  ]
} </pre>

    
    
Output:
<pre>{
  "intersection": [
    [
      1,
      3,
      4
    ],
    "apple"
  ],
  "array1Only": [
    [
      1,
      2
    ]
  ],
  "array2Only": [
    [
      1,
      3,
      5
    ],
    99
  ],
  "difference": [
    [
      1,
      2
    ],
    [
      1,
      3,
      5
    ],
    99
  ],
  "union": [
    [
      1,
      3,
      4
    ],
    [
      1,
      2
    ],
    "apple",
    [
      1,
      3,
      5
    ],
    99
  ]
} </pre>

    
  
##### Example 2

    
Input:
<pre>{
  "array1": [
    {
      "city": "Atlanta",
      "state": "GA"
    },
    {
      "city": "Sandy Springs",
      "state": "GA"
    },
    {
      "city": "Dallas",
      "state": "TX"
    },
    {
      "city": "Silver Spring",
      "state": "MD"
    }
  ],
  "array2": [
    {
      "city": "Atlanta",
      "state": "GA"
    },
    {
      "city": "Sandy Springs",
      "state": "GA"
    },
    {
      "city": "Dallas",
      "state": "TX"
    },
    {
      "city": "Orlando",
      "state": "FL"
    }
  ]
} </pre>

    
    
Output:
<pre>{
  "intersection": [
    {
      "city": "Atlanta",
      "state": "GA"
    },
    {
      "city": "Sandy Springs",
      "state": "GA"
    },
    {
      "city": "Dallas",
      "state": "TX"
    }
  ],
  "array1Only": [
    {
      "city": "Silver Spring",
      "state": "MD"
    }
  ],
  "array2Only": [
    {
      "city": "Orlando",
      "state": "FL"
    }
  ],
  "difference": [
    {
      "city": "Silver Spring",
      "state": "MD"
    },
    {
      "city": "Orlando",
      "state": "FL"
    }
  ],
  "union": [
    {
      "city": "Atlanta",
      "state": "GA"
    },
    {
      "city": "Sandy Springs",
      "state": "GA"
    },
    {
      "city": "Dallas",
      "state": "TX"
    },
    {
      "city": "Silver Spring",
      "state": "MD"
    },
    {
      "city": "Orlando",
      "state": "FL"
    }
  ]
} </pre>

    
  


#### API Links
As noted on the JSON Schema Transformation (JST) Designer documentation for [Using a Method](https://docs.itential.com/docs/jst-designer-2023-1#using-a-method), select the information `(i)` icon in the header of the method to be redirected to the [Mozilla Developer Network JavaScript reference documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference) for the method. 

<table>
  <thead>
    <tr>
      <th>API Name</th>
      <th>API Documentation Link</th>
      <th>API Link Visibility</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>IAP JSON Schema Transformation (JST) Designer</td>
      <td><a href="https://docs.itential.com/docs/jst-designer-2023-1">https://docs.itential.com/docs/jst-designer-2023-1</a></td>
      <td>Public</td>
    </tr>    <tr>
      <td>Using Transformations in IAP Workflows</td>
      <td><a href="https://docs.itential.com/docs/transformation-options-4">https://docs.itential.com/docs/transformation-options-4</a></td>
      <td>Public</td>
    </tr>
  </tbody>
</table>



---
### <ins>Parse Number - IAP</ins>
Convert strings and strings within objects to numbers

Capabilities include:
- This transformation allows IAP users to convert strings and strings within objects to numbers







#### Entry Point IAP Component

The primary IAP component to run **Parse Number - IAP** is listed below:

<table>
  <thead>
    <tr>
      <th>IAP Component Name</th>
      <th>IAP Component Type</th>
    </tr>
  </thead>
  <tbody>
      <td>Parse Number - IAP</td>
      <td>Transformation</td>
    </tr>
  </tbody>
</table>

#### Inputs

The following table lists the inputs for **Parse Number - IAP**:

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Required</th>
      <th>Description</th>
      <th>Example Value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>keysToConvert</td>
      <td>array</td>
      <td>yes</td>
      <td>The keys to be converted in the object if the data is an object or an array of objects. Set this attribute to [] if not applicable, or if all keys need to be converted</td>
      <td><pre lang="json">[
  "price",
  "aisle"
]</pre></td>
    </tr>    <tr>
      <td>data</td>
      <td>['array', 'number', 'string', 'object']</td>
      <td>yes</td>
      <td>Data that have strings that need to be converted to number. For arrays and objects, the JST will convert strings in the first level only</td>
      <td><pre lang="json">{
  "fruit": "apple",
  "quantity": "30",
  "price": "42.2",
  "aisle": "23b"
}</pre></td>
    </tr>
  </tbody>
</table>



#### Outputs

The following table lists the outputs for **Parse Number - IAP**:

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Description</th>
      <th>Example Value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>output</td>
      <td>['array', 'object', 'number', 'string']</td>
      <td>Parsed data</td>
      <td><pre lang="json">{
  "fruit": "apple",
  "quantity": "30",
  "price": 42.2,
  "aisle": "23b"
}</pre></td>
    </tr>
  </tbody>
</table>



#### Query Output

There are no query output examples for **Parse Number - IAP**.




#### Example Inputs and Outputs

  
##### Example 1

    
Input:
<pre>{
  "keysToConvert": [
    "price",
    "aisle"
  ],
  "data": {
    "fruit": "apple",
    "quantity": "30",
    "price": "42.2",
    "aisle": "23b"
  }
} </pre>

    
    
Output:
<pre>{
  "fruit": "apple",
  "quantity": "30",
  "price": 42.2,
  "aisle": "23b"
} </pre>

    
  
##### Example 2

    
Input:
<pre>{
  "keysToConvert": [],
  "data": [
    12,
    true,
    "32.23",
    "banana",
    [
      "43"
    ],
    "35"
  ]
} </pre>

    
    
Output:
<pre>[
  12,
  true,
  32.23,
  "banana",
  [
    "43"
  ],
  35
] </pre>

    
  
##### Example 3

    
Input:
<pre>{
  "keysToConvert": [],
  "data": [
    {
      "FILE_SYSTEM": "net/node0_RP0_CPU0/harddisk",
      "TOTAL_SIZE": "17538482176",
      "TOTAL_FREE": "14333425152"
    },
    {
      "FILE_SYSTEM": "net/node0_RP1_CPU0/harddisk",
      "TOTAL_SIZE": "17538482175",
      "TOTAL_FREE": "44222222"
    }
  ]
} </pre>

    
    
Output:
<pre>[
  {
    "FILE_SYSTEM": "net/node0_RP0_CPU0/harddisk",
    "TOTAL_SIZE": 17538482176,
    "TOTAL_FREE": 14333425152
  },
  {
    "FILE_SYSTEM": "net/node0_RP1_CPU0/harddisk",
    "TOTAL_SIZE": 17538482175,
    "TOTAL_FREE": 44222222
  }
] </pre>

    
  


#### API Links
As noted on the JSON Schema Transformation (JST) Designer documentation for [Using a Method](https://docs.itential.com/docs/jst-designer-2023-1#using-a-method), select the information `(i)` icon in the header of the method to be redirected to the [Mozilla Developer Network JavaScript reference documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference) for the method. 

<table>
  <thead>
    <tr>
      <th>API Name</th>
      <th>API Documentation Link</th>
      <th>API Link Visibility</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>IAP JSON Schema Transformation (JST) Designer</td>
      <td><a href="https://docs.itential.com/docs/jst-designer-2023-1">https://docs.itential.com/docs/jst-designer-2023-1</a></td>
      <td>Public</td>
    </tr>    <tr>
      <td>Using Transformations in IAP Workflows</td>
      <td><a href="https://docs.itential.com/docs/transformation-options-4">https://docs.itential.com/docs/transformation-options-4</a></td>
      <td>Public</td>
    </tr>
  </tbody>
</table>



---
### <ins>Remove Duplicates From Array of Arrays or Objects - IAP</ins>
Remove duplicates from an array of objects or array of arrays

Capabilities include:
- This transformation allows IAP users to remove duplicates from an array of objects or array of arrays







#### Entry Point IAP Component

The primary IAP component to run **Remove Duplicates From Array of Arrays or Objects - IAP** is listed below:

<table>
  <thead>
    <tr>
      <th>IAP Component Name</th>
      <th>IAP Component Type</th>
    </tr>
  </thead>
  <tbody>
      <td>Remove Duplicates From Array of Arrays or Objects - IAP</td>
      <td>Transformation</td>
    </tr>
  </tbody>
</table>

#### Inputs

The following table lists the inputs for **Remove Duplicates From Array of Arrays or Objects - IAP**:

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Required</th>
      <th>Description</th>
      <th>Example Value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>array</td>
      <td>array</td>
      <td>yes</td>
      <td>An array of objects or an array of arrays</td>
      <td><pre lang="json">[
  {
    "a": "a"
  },
  {
    "a": "b"
  },
  {
    "a": "a"
  },
  {
    "a": {
      "a": [
        1,
        2,
        3
      ]
    }
  },
  {
    "a": {
      "a": [
        1,
        2,
        3
      ]
    }
  }
]</pre></td>
    </tr>
  </tbody>
</table>



#### Outputs

The following table lists the outputs for **Remove Duplicates From Array of Arrays or Objects - IAP**:

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Description</th>
      <th>Example Value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>uniqueArray</td>
      <td>array</td>
      <td>Array containing the elements from the input array without any duplicates</td>
      <td><pre lang="json">[
  {
    "a": "a"
  },
  {
    "a": "b"
  },
  {
    "a": {
      "a": [
        1,
        2,
        3
      ]
    }
  }
]</pre></td>
    </tr>
  </tbody>
</table>



#### Query Output

There are no query output examples for **Remove Duplicates From Array of Arrays or Objects - IAP**.




#### Example Inputs and Outputs

  
##### Example 1

    
Input:
<pre>{
  "array": [
    {
      "a": "a"
    },
    {
      "a": "b"
    },
    {
      "a": "a"
    },
    {
      "a": {
        "a": [
          1,
          2,
          3
        ]
      }
    },
    {
      "a": {
        "a": [
          1,
          2,
          3
        ]
      }
    }
  ]
} </pre>

    
    
Output:
<pre>[
  {
    "a": "a"
  },
  {
    "a": "b"
  },
  {
    "a": {
      "a": [
        1,
        2,
        3
      ]
    }
  }
] </pre>

    
  
##### Example 2

    
Input:
<pre>{
  "array": [
    [
      [
        1
      ],
      [
        1
      ],
      [
        2
      ]
    ],
    [
      1,
      2
    ],
    [
      2,
      1
    ],
    [
      3,
      4,
      5
    ],
    [
      1,
      2
    ],
    [
      [
        1
      ],
      [
        1
      ],
      [
        2
      ]
    ],
    [
      [
        1
      ],
      [
        1
      ],
      [
        1
      ]
    ]
  ]
} </pre>

    
    
Output:
<pre>[
  [
    [
      1
    ],
    [
      1
    ],
    [
      2
    ]
  ],
  [
    1,
    2
  ],
  [
    2,
    1
  ],
  [
    3,
    4,
    5
  ],
  [
    [
      1
    ],
    [
      1
    ],
    [
      1
    ]
  ]
] </pre>

    
  


#### API Links
As noted on the JSON Schema Transformation (JST) Designer documentation for [Using a Method](https://docs.itential.com/docs/jst-designer-2023-1#using-a-method), select the information `(i)` icon in the header of the method to be redirected to the [Mozilla Developer Network JavaScript reference documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference) for the method. 

<table>
  <thead>
    <tr>
      <th>API Name</th>
      <th>API Documentation Link</th>
      <th>API Link Visibility</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>IAP JSON Schema Transformation (JST) Designer</td>
      <td><a href="https://docs.itential.com/docs/jst-designer-2023-1">https://docs.itential.com/docs/jst-designer-2023-1</a></td>
      <td>Public</td>
    </tr>    <tr>
      <td>Using Transformations in IAP Workflows</td>
      <td><a href="https://docs.itential.com/docs/transformation-options-4">https://docs.itential.com/docs/transformation-options-4</a></td>
      <td>Public</td>
    </tr>
  </tbody>
</table>



---
### <ins>Remove Duplicates From Array of Primitives - IAP</ins>
Remove duplicates from an array of primitives

Capabilities include:
- This transformation allows IAP users to remove duplicates from an array of primitives







#### Entry Point IAP Component

The primary IAP component to run **Remove Duplicates From Array of Primitives - IAP** is listed below:

<table>
  <thead>
    <tr>
      <th>IAP Component Name</th>
      <th>IAP Component Type</th>
    </tr>
  </thead>
  <tbody>
      <td>Remove Duplicates From Array of Primitives - IAP</td>
      <td>Transformation</td>
    </tr>
  </tbody>
</table>

#### Inputs

The following table lists the inputs for **Remove Duplicates From Array of Primitives - IAP**:

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Required</th>
      <th>Description</th>
      <th>Example Value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>array</td>
      <td>array</td>
      <td>yes</td>
      <td>Array of primitives to remove duplicates from. An array can hold elements of various data types, including numbers, strings, boolean, null</td>
      <td><pre lang="json">[
  "hello",
  "world",
  "hello",
  null,
  true,
  true,
  null,
  "world",
  "HeLLo"
]</pre></td>
    </tr>
  </tbody>
</table>



#### Outputs

The following table lists the outputs for **Remove Duplicates From Array of Primitives - IAP**:

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Description</th>
      <th>Example Value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>uniqueArray</td>
      <td>array</td>
      <td>Array containing the elements from the input array without any duplicates</td>
      <td><pre lang="json">[
  "hello",
  "world",
  null,
  true,
  "HeLLo"
]</pre></td>
    </tr>
  </tbody>
</table>



#### Query Output

There are no query output examples for **Remove Duplicates From Array of Primitives - IAP**.




#### Example Inputs and Outputs

  
##### Example 1

    
Input:
<pre>{
  "array": [
    "hello",
    "world",
    "hello",
    null,
    true,
    true,
    null,
    "world",
    "HeLLo"
  ]
} </pre>

    
    
Output:
<pre>[
  "hello",
  "world",
  null,
  true,
  "HeLLo"
] </pre>

    
  
##### Example 2

    
Input:
<pre>{
  "array": [
    9,
    8,
    7.45,
    77,
    7,
    7,
    8,
    9
  ]
} </pre>

    
    
Output:
<pre>[
  9,
  8,
  7.45,
  77,
  7
] </pre>

    
  


#### API Links
As noted on the JSON Schema Transformation (JST) Designer documentation for [Using a Method](https://docs.itential.com/docs/jst-designer-2023-1#using-a-method), select the information `(i)` icon in the header of the method to be redirected to the [Mozilla Developer Network JavaScript reference documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference) for the method. 

<table>
  <thead>
    <tr>
      <th>API Name</th>
      <th>API Documentation Link</th>
      <th>API Link Visibility</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>IAP JSON Schema Transformation (JST) Designer</td>
      <td><a href="https://docs.itential.com/docs/jst-designer-2023-1">https://docs.itential.com/docs/jst-designer-2023-1</a></td>
      <td>Public</td>
    </tr>    <tr>
      <td>Using Transformations in IAP Workflows</td>
      <td><a href="https://docs.itential.com/docs/transformation-options-4">https://docs.itential.com/docs/transformation-options-4</a></td>
      <td>Public</td>
    </tr>
  </tbody>
</table>



---
### <ins>Remove Element From Array by Index - IAP</ins>
Remove an element from an array by index

Capabilities include:
- This transformation allows IAP users to remove an element from an array by index







#### Entry Point IAP Component

The primary IAP component to run **Remove Element From Array by Index - IAP** is listed below:

<table>
  <thead>
    <tr>
      <th>IAP Component Name</th>
      <th>IAP Component Type</th>
    </tr>
  </thead>
  <tbody>
      <td>Remove Element From Array by Index - IAP</td>
      <td>Transformation</td>
    </tr>
  </tbody>
</table>

#### Inputs

The following table lists the inputs for **Remove Element From Array by Index - IAP**:

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Required</th>
      <th>Description</th>
      <th>Example Value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>array</td>
      <td>array</td>
      <td>yes</td>
      <td>Array that has element to be removed</td>
      <td><pre lang="json">[
  9,
  8,
  7.45,
  77,
  7
]</pre></td>
    </tr>    <tr>
      <td>index</td>
      <td>integer</td>
      <td>yes</td>
      <td>Index of the element to be removed</td>
      <td><pre lang="json">1</pre></td>
    </tr>
  </tbody>
</table>



#### Outputs

The following table lists the outputs for **Remove Element From Array by Index - IAP**:

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Description</th>
      <th>Example Value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>newArray</td>
      <td>array</td>
      <td>Modified array after removing an element at the specified index</td>
      <td><pre lang="json">[
  9,
  7.45,
  77,
  7
]</pre></td>
    </tr>    <tr>
      <td>item</td>
      <td>['array', 'boolean', 'number', 'string', 'object', 'null']</td>
      <td>The item that was removed from the array</td>
      <td><pre lang="json">8</pre></td>
    </tr>
  </tbody>
</table>



#### Query Output

There are no query output examples for **Remove Element From Array by Index - IAP**.




#### Example Inputs and Outputs

  
##### Example 1

    
Input:
<pre>{
  "array": [
    9,
    8,
    7.45,
    77,
    7
  ],
  "index": 1
} </pre>

    
    
Output:
<pre>{
  "newArray": [
    9,
    7.45,
    77,
    7
  ],
  "item": 8
} </pre>

    
  
##### Example 2

    
Input:
<pre>{
  "array": [
    {
      "a": "a"
    },
    {
      "b": "b"
    },
    {
      "c": "a"
    },
    {
      "d": {
        "e": [
          1,
          2
        ]
      }
    },
    {
      "f": {
        "g": [
          1,
          2,
          3
        ]
      }
    }
  ],
  "index": 4
} </pre>

    
    
Output:
<pre>{
  "newArray": [
    {
      "a": "a"
    },
    {
      "b": "b"
    },
    {
      "c": "a"
    },
    {
      "d": {
        "e": [
          1,
          2
        ]
      }
    }
  ],
  "item": {
    "f": {
      "g": [
        1,
        2,
        3
      ]
    }
  }
} </pre>

    
  


#### API Links
As noted on the JSON Schema Transformation (JST) Designer documentation for [Using a Method](https://docs.itential.com/docs/jst-designer-2023-1#using-a-method), select the information `(i)` icon in the header of the method to be redirected to the [Mozilla Developer Network JavaScript reference documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference) for the method. 

<table>
  <thead>
    <tr>
      <th>API Name</th>
      <th>API Documentation Link</th>
      <th>API Link Visibility</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>IAP JSON Schema Transformation (JST) Designer</td>
      <td><a href="https://docs.itential.com/docs/jst-designer-2023-1">https://docs.itential.com/docs/jst-designer-2023-1</a></td>
      <td>Public</td>
    </tr>    <tr>
      <td>Using Transformations in IAP Workflows</td>
      <td><a href="https://docs.itential.com/docs/transformation-options-4">https://docs.itential.com/docs/transformation-options-4</a></td>
      <td>Public</td>
    </tr>
  </tbody>
</table>



---
### <ins>Remove Element From Array by Value - IAP</ins>
Remove an element from an array by a value

Capabilities include:
- This transformation allows IAP users to remove an element from an array based on a certain value







#### Entry Point IAP Component

The primary IAP component to run **Remove Element From Array by Value - IAP** is listed below:

<table>
  <thead>
    <tr>
      <th>IAP Component Name</th>
      <th>IAP Component Type</th>
    </tr>
  </thead>
  <tbody>
      <td>Remove Element From Array by Value - IAP</td>
      <td>Transformation</td>
    </tr>
  </tbody>
</table>

#### Inputs

The following table lists the inputs for **Remove Element From Array by Value - IAP**:

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Required</th>
      <th>Description</th>
      <th>Example Value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>array</td>
      <td>array</td>
      <td>yes</td>
      <td>Array consisting of numbers, strings, booleans or null</td>
      <td><pre lang="json">[
  7,
  9,
  8,
  7.45,
  77,
  7
]</pre></td>
    </tr>    <tr>
      <td>value</td>
      <td>['number', 'string', 'null', 'boolean']</td>
      <td>yes</td>
      <td>The value to be removed from the array</td>
      <td><pre lang="json">7</pre></td>
    </tr>    <tr>
      <td>removeAll</td>
      <td>boolean</td>
      <td>yes</td>
      <td>Whether to remove only the first occurrence of the value or all the occurrences. A 'true' value results in the removal of all the occurrences of the value whereas a 'false' value results in the removal of that value at the first found index</td>
      <td><pre lang="json">true</pre></td>
    </tr>
  </tbody>
</table>



#### Outputs

The following table lists the outputs for **Remove Element From Array by Value - IAP**:

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Description</th>
      <th>Example Value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>newArray</td>
      <td>array</td>
      <td>Modified array after removing elements</td>
      <td><pre lang="json">[
  9,
  8,
  7.45,
  77
]</pre></td>
    </tr>    <tr>
      <td>noOfRemovedItems</td>
      <td>boolean</td>
      <td>The number of the items that have been removed</td>
      <td><pre lang="json">2</pre></td>
    </tr>
  </tbody>
</table>



#### Query Output

There are no query output examples for **Remove Element From Array by Value - IAP**.




#### Example Inputs and Outputs

  
##### Example 1

    
Input:
<pre>{
  "array": [
    7,
    9,
    8,
    7.45,
    77,
    7
  ],
  "value": 7,
  "removeAll": true
} </pre>

    
    
Output:
<pre>{
  "newArray": [
    9,
    8,
    7.45,
    77
  ],
  "noOfRemovedItems": 2
} </pre>

    
  
##### Example 2

    
Input:
<pre>{
  "array": [
    7,
    9,
    8,
    7.45,
    77,
    7
  ],
  "value": 7,
  "removeAll": false
} </pre>

    
    
Output:
<pre>{
  "newArray": [
    9,
    8,
    7.45,
    77,
    7
  ],
  "noOfRemovedItems": 1
} </pre>

    
  
##### Example 3

    
Input:
<pre>{
  "array": [
    7,
    9,
    8,
    "hi"
  ],
  "value": "hello",
  "removeAll": false
} </pre>

    
    
Output:
<pre>{
  "newArray": [
    7,
    9,
    8,
    "hi"
  ],
  "noOfRemovedItems": 0
} </pre>

    
  


#### API Links
As noted on the JSON Schema Transformation (JST) Designer documentation for [Using a Method](https://docs.itential.com/docs/jst-designer-2023-1#using-a-method), select the information `(i)` icon in the header of the method to be redirected to the [Mozilla Developer Network JavaScript reference documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference) for the method. 

<table>
  <thead>
    <tr>
      <th>API Name</th>
      <th>API Documentation Link</th>
      <th>API Link Visibility</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>IAP JSON Schema Transformation (JST) Designer</td>
      <td><a href="https://docs.itential.com/docs/jst-designer-2023-1">https://docs.itential.com/docs/jst-designer-2023-1</a></td>
      <td>Public</td>
    </tr>    <tr>
      <td>Using Transformations in IAP Workflows</td>
      <td><a href="https://docs.itential.com/docs/transformation-options-4">https://docs.itential.com/docs/transformation-options-4</a></td>
      <td>Public</td>
    </tr>
  </tbody>
</table>



---
### <ins>Separate Array of Objects by Key Value Pair - IAP</ins>
Separate an array of objects by a key value pair

Capabilities include:
- This transformation allows IAP users to separate an array of objects into an array of matching items and an array of non-matching items by providing a key and value that needs to be matched







#### Entry Point IAP Component

The primary IAP component to run **Separate Array of Objects by Key Value Pair - IAP** is listed below:

<table>
  <thead>
    <tr>
      <th>IAP Component Name</th>
      <th>IAP Component Type</th>
    </tr>
  </thead>
  <tbody>
      <td>Separate Array of Objects by Key Value Pair - IAP</td>
      <td>Transformation</td>
    </tr>
  </tbody>
</table>

#### Inputs

The following table lists the inputs for **Separate Array of Objects by Key Value Pair - IAP**:

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Required</th>
      <th>Description</th>
      <th>Example Value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>dataArray</td>
      <td>array</td>
      <td>yes</td>
      <td>An array of objects that needs separation</td>
      <td><pre lang="json">[
  {
    "city": "Atlanta",
    "state": "GA"
  },
  {
    "city": "Sandy Springs",
    "state": "GA"
  },
  {
    "city": "Dallas",
    "state": "TX"
  },
  {
    "city": "Orlando",
    "state": "FL"
  }
]</pre></td>
    </tr>    <tr>
      <td>key</td>
      <td>string</td>
      <td>yes</td>
      <td>The property that needs to be matched</td>
      <td><pre lang="json">state</pre></td>
    </tr>    <tr>
      <td>value</td>
      <td>['array', 'boolean', 'null', 'object', 'number', 'string']</td>
      <td>yes</td>
      <td>The value of the property that needs to be matched</td>
      <td><pre lang="json">GA</pre></td>
    </tr>
  </tbody>
</table>



#### Outputs

The following table lists the outputs for **Separate Array of Objects by Key Value Pair - IAP**:

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Description</th>
      <th>Example Value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>matchingItems</td>
      <td>array</td>
      <td>Array of the matching objects</td>
      <td><pre lang="json">[
  {
    "city": "Atlanta",
    "state": "GA"
  },
  {
    "city": "Sandy Springs",
    "state": "GA"
  }
]</pre></td>
    </tr>    <tr>
      <td>nonmatchingItems</td>
      <td>array</td>
      <td>Array of the non-matching objects</td>
      <td><pre lang="json">[
  {
    "city": "Dallas",
    "state": "TX"
  },
  {
    "city": "Orlando",
    "state": "FL"
  }
]</pre></td>
    </tr>
  </tbody>
</table>



#### Query Output

There are no query output examples for **Separate Array of Objects by Key Value Pair - IAP**.




#### Example Inputs and Outputs

  
##### Example 1

    
Input:
<pre>{
  "dataArray": [
    {
      "city": "Atlanta",
      "state": "GA"
    },
    {
      "city": "Sandy Springs",
      "state": "GA"
    },
    {
      "city": "Dallas",
      "state": "TX"
    },
    {
      "city": "Orlando",
      "state": "FL"
    }
  ],
  "key": "state",
  "value": "GA"
} </pre>

    
    
Output:
<pre>{
  "matchingItems": [
    {
      "city": "Atlanta",
      "state": "GA"
    },
    {
      "city": "Sandy Springs",
      "state": "GA"
    }
  ],
  "nonmatchingItems": [
    {
      "city": "Dallas",
      "state": "TX"
    },
    {
      "city": "Orlando",
      "state": "FL"
    }
  ]
} </pre>

    
  
##### Example 2

    
Input:
<pre>{
  "dataArray": [
    {
      "store": "Costco",
      "item": "orange"
    },
    {
      "store": "Costco",
      "item": "milk"
    },
    {
      "store": "Kroger",
      "item": "yam"
    },
    {
      "store": "CVS",
      "item": "batteries"
    }
  ],
  "key": "store",
  "value": "Walmart"
} </pre>

    
    
Output:
<pre>{
  "matchingItems": [],
  "nonmatchingItems": [
    {
      "store": "Costco",
      "item": "orange"
    },
    {
      "store": "Costco",
      "item": "milk"
    },
    {
      "store": "Kroger",
      "item": "yam"
    },
    {
      "store": "CVS",
      "item": "batteries"
    }
  ]
} </pre>

    
  


#### API Links
As noted on the JSON Schema Transformation (JST) Designer documentation for [Using a Method](https://docs.itential.com/docs/jst-designer-2023-1#using-a-method), select the information `(i)` icon in the header of the method to be redirected to the [Mozilla Developer Network JavaScript reference documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference) for the method. 

<table>
  <thead>
    <tr>
      <th>API Name</th>
      <th>API Documentation Link</th>
      <th>API Link Visibility</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>IAP JSON Schema Transformation (JST) Designer</td>
      <td><a href="https://docs.itential.com/docs/jst-designer-2023-1">https://docs.itential.com/docs/jst-designer-2023-1</a></td>
      <td>Public</td>
    </tr>    <tr>
      <td>Using Transformations in IAP Workflows</td>
      <td><a href="https://docs.itential.com/docs/transformation-options-4">https://docs.itential.com/docs/transformation-options-4</a></td>
      <td>Public</td>
    </tr>
  </tbody>
</table>



---
### <ins>Split String into Array by Regex or Separator - IAP</ins>
Split a string into an array by regex or another string

Capabilities include:
- This transformation allows IAP users to split a string into an array by regex or another string







#### Entry Point IAP Component

The primary IAP component to run **Split String into Array by Regex or Separator - IAP** is listed below:

<table>
  <thead>
    <tr>
      <th>IAP Component Name</th>
      <th>IAP Component Type</th>
    </tr>
  </thead>
  <tbody>
      <td>Split String into Array by Regex or Separator - IAP</td>
      <td>Transformation</td>
    </tr>
  </tbody>
</table>

#### Inputs

The following table lists the inputs for **Split String into Array by Regex or Separator - IAP**:

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Required</th>
      <th>Description</th>
      <th>Example Value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>inputString</td>
      <td>string</td>
      <td>yes</td>
      <td>String to be splitted into array</td>
      <td><pre lang="json">Hello123world-456,2024</pre></td>
    </tr>    <tr>
      <td>separatorString</td>
      <td>string</td>
      <td>yes</td>
      <td>String used as a separator. If "separatorString" and "separatorRegex" are included, "separatorString" is used by default and the "separatorRegex" is ignored</td>
      <td><pre lang="json">o</pre></td>
    </tr>    <tr>
      <td>separatorRegex</td>
      <td>string</td>
      <td>yes</td>
      <td>Regex pattern used as a separator. If "separatorString" and "separatorRegex" are included, "separatorString" is used by default and the "separatorRegex" is ignored</td>
      <td><pre lang="json">/\d+/gm</pre></td>
    </tr>    <tr>
      <td>limit</td>
      <td>['integer', 'null']</td>
      <td>no</td>
      <td>A non-negative integer specifying a limit on the number of substrings to be included in the array</td>
      <td><pre lang="json">2</pre></td>
    </tr>
  </tbody>
</table>



#### Outputs

The following table lists the outputs for **Split String into Array by Regex or Separator - IAP**:

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Description</th>
      <th>Example Value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>splitArray</td>
      <td>array</td>
      <td>Array of substrings</td>
      <td><pre lang="json">[
  "Hello",
  "world-",
  ",",
  ""
]</pre></td>
    </tr>
  </tbody>
</table>



#### Query Output

There are no query output examples for **Split String into Array by Regex or Separator - IAP**.




#### Example Inputs and Outputs

  
##### Example 1

    
Input:
<pre>{
  "inputString": "Hello123world-456,2024",
  "separatorString": "",
  "separatorRegex": "/\d+/gm",
  "limit": null
} </pre>

    
    
Output:
<pre>[
  "Hello",
  "world-",
  ",",
  ""
] </pre>

    
  
##### Example 2

    
Input:
<pre>{
  "inputString": "Hello123world-456,2024",
  "separatorString": "o",
  "separatorRegex": "/\d+/gm",
  "limit": 2
} </pre>

    
    
Output:
<pre>[
  "Hell",
  "123w"
] </pre>

    
  


#### API Links
As noted on the JSON Schema Transformation (JST) Designer documentation for [Using a Method](https://docs.itential.com/docs/jst-designer-2023-1#using-a-method), select the information `(i)` icon in the header of the method to be redirected to the [Mozilla Developer Network JavaScript reference documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference) for the method. 

<table>
  <thead>
    <tr>
      <th>API Name</th>
      <th>API Documentation Link</th>
      <th>API Link Visibility</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>IAP JSON Schema Transformation (JST) Designer</td>
      <td><a href="https://docs.itential.com/docs/jst-designer-2023-1">https://docs.itential.com/docs/jst-designer-2023-1</a></td>
      <td>Public</td>
    </tr>    <tr>
      <td>Using Transformations in IAP Workflows</td>
      <td><a href="https://docs.itential.com/docs/transformation-options-4">https://docs.itential.com/docs/transformation-options-4</a></td>
      <td>Public</td>
    </tr>
  </tbody>
</table>



---
### <ins>Transpose Record by Creating Arrays for Each Property Within Groups - IAP</ins>
Transpose the record by creating arrays for each property within the groups

Capabilities include:
- This transformation allows IAP users to transpose the record by creating arrays for each property within the groups







#### Entry Point IAP Component

The primary IAP component to run **Transpose Record by Creating Arrays for Each Property Within Groups - IAP** is listed below:

<table>
  <thead>
    <tr>
      <th>IAP Component Name</th>
      <th>IAP Component Type</th>
    </tr>
  </thead>
  <tbody>
      <td>Transpose Record by Creating Arrays for Each Property Within Groups - IAP</td>
      <td>Transformation</td>
    </tr>
  </tbody>
</table>

#### Inputs

The following table lists the inputs for **Transpose Record by Creating Arrays for Each Property Within Groups - IAP**:

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Required</th>
      <th>Description</th>
      <th>Example Value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>array</td>
      <td>array</td>
      <td>yes</td>
      <td>An array of objects</td>
      <td><pre lang="json">[
  {
    "item": "apple",
    "price": "42.2",
    "type": "fruit"
  },
  {
    "item": "banana",
    "price": "10.1",
    "type": "fruit"
  },
  {
    "item": "potato",
    "price": "20",
    "type": "vegetable"
  }
]</pre></td>
    </tr>    <tr>
      <td>groupByProperty</td>
      <td>string</td>
      <td>yes</td>
      <td>A property by which to group the input array</td>
      <td><pre lang="json">type</pre></td>
    </tr>
  </tbody>
</table>



#### Outputs

The following table lists the outputs for **Transpose Record by Creating Arrays for Each Property Within Groups - IAP**:

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Description</th>
      <th>Example Value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>output</td>
      <td>object</td>
      <td>An object containing a list of objects organized by the groupByProperty value. Each property within the groups is transformed into an array</td>
      <td><pre lang="json">{
  "fruit": {
    "item": [
      "apple",
      "banana"
    ],
    "price": [
      "42.2",
      "10.1"
    ]
  },
  "vegetable": {
    "item": [
      "potato"
    ],
    "price": [
      "20"
    ]
  }
}</pre></td>
    </tr>
  </tbody>
</table>



#### Query Output

There are no query output examples for **Transpose Record by Creating Arrays for Each Property Within Groups - IAP**.




#### Example Inputs and Outputs

  
##### Example 1

    
Input:
<pre>{
  "array": [
    {
      "item": "apple",
      "price": "42.2",
      "type": "fruit"
    },
    {
      "item": "banana",
      "price": "10.1",
      "type": "fruit"
    },
    {
      "item": "potato",
      "price": "20",
      "type": "vegetable"
    }
  ],
  "groupByProperty": "type"
} </pre>

    
    
Output:
<pre>{
  "fruit": {
    "item": [
      "apple",
      "banana"
    ],
    "price": [
      "42.2",
      "10.1"
    ]
  },
  "vegetable": {
    "item": [
      "potato"
    ],
    "price": [
      "20"
    ]
  }
} </pre>

    
  
##### Example 2

    
Input:
<pre>{
  "array": [
    {
      "number": 43,
      "president": "George W. Bush",
      "took_office": "2001-01-20",
      "left_office": "2009-01-20",
      "party": "Republican"
    },
    {
      "number": 44,
      "president": "Barack Obama",
      "took_office": "2009-01-20",
      "left_office": "2017-01-20",
      "party": "Democratic"
    },
    {
      "number": 45,
      "president": "Donald J. Trump",
      "took_office": "2017-01-20",
      "left_office": null,
      "party": "Republican"
    },
    {
      "number": 47,
      "president": "Joe Biden",
      "took_office": "2021-01-20",
      "left_office": null
    }
  ],
  "groupByProperty": "party"
} </pre>

    
    
Output:
<pre>{
  "Republican": {
    "number": [
      43,
      45
    ],
    "president": [
      "George W. Bush",
      "Donald J. Trump"
    ],
    "took_office": [
      "2001-01-20",
      "2017-01-20"
    ],
    "left_office": [
      "2009-01-20",
      null
    ]
  },
  "Democratic": {
    "number": [
      44
    ],
    "president": [
      "Barack Obama"
    ],
    "took_office": [
      "2009-01-20"
    ],
    "left_office": [
      "2017-01-20"
    ]
  },
  "undefined": {
    "number": [
      47
    ],
    "president": [
      "Joe Biden"
    ],
    "took_office": [
      "2021-01-20"
    ],
    "left_office": [
      null
    ]
  }
} </pre>

    
  


#### API Links
As noted on the JSON Schema Transformation (JST) Designer documentation for [Using a Method](https://docs.itential.com/docs/jst-designer-2023-1#using-a-method), select the information `(i)` icon in the header of the method to be redirected to the [Mozilla Developer Network JavaScript reference documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference) for the method. 

<table>
  <thead>
    <tr>
      <th>API Name</th>
      <th>API Documentation Link</th>
      <th>API Link Visibility</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>IAP JSON Schema Transformation (JST) Designer</td>
      <td><a href="https://docs.itential.com/docs/jst-designer-2023-1">https://docs.itential.com/docs/jst-designer-2023-1</a></td>
      <td>Public</td>
    </tr>    <tr>
      <td>Using Transformations in IAP Workflows</td>
      <td><a href="https://docs.itential.com/docs/transformation-options-4">https://docs.itential.com/docs/transformation-options-4</a></td>
      <td>Public</td>
    </tr>
  </tbody>
</table>



---
## Additional Information

### Support
Please use your Itential Customer Success account if you need support when using this Workflow Project.



