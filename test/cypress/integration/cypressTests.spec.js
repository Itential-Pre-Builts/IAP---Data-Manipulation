import { PrebuiltRunner, TransformationRunner } from '@itential-tools/iap-cypress-testing-library/testRunner/testRunners';

function initializeWorkflowRunner(transformation, importTransformation) {
  const transformationRunner = new TransformationRunner(transformation.name);

  if (importTransformation) {
    transformationRunner.deleteTransformation.allVersions({
      failOnStatusCode: false
    });
    transformationRunner.importTransformation.single({
      transformation
  });
  }

  /* Verify transformation */
  transformationRunner.verifyTransformation.exists();
  transformationRunner.verifyTransformation.hasNoDuplicates();

  return transformationRunner;
}

describe('Default: Cypress Tests', function () {
  let prebuiltRunner;
  let AggregateFunctionsforArraysIAP;
  let AllocateaPairofNumbersIAP;
  let AllocateOneNumberIAP;
  let ChunkArrayIAP;
  let ClearEmptyKeysIAP;
  let ConvertCSVtoJSONIAP;
  let ConvertStringtoSpecialCasesIAP;
  let FilterArrayofObjectsbyKeyValuePairIAP;
  let GenerateRandomIntegerWithinRangeIAP;
  let GetRandomElementFromArrayIAP;
  let GetValueFromJSONPointerIAP;
  let GroupRecordsbyPropertyIAP;
  let ParseNumberIAP;
  let RemoveDuplicatesFromArrayofArraysorObjectsIAP;
  let RemoveDuplicatesFromArrayofPrimitivesIAP;
  let RemoveElementFromArraybyIndexIAP;
  let RemoveElementFromArraybyValueIAP;
  let SeparateArrayofObjectsbyKeyValuePairIAP;
  let SplitStringintoArraybyRegexorSeparatorIAP;
  let TransposeRecordbyCreatingArraysforEachPropertyWithinGroupsIAP;

  before(function () {
    //creates a prebuiltRunner for importing the Project
    cy.fixture(`../../../artifact.json`).then((data) => {
      prebuiltRunner = new PrebuiltRunner(data);
    });
    cy.fixture(`../../../bundles/transformations/Aggregate Functions for Arrays - IAP.json`).then((data) => {
      AggregateFunctionsforArraysIAP = data;
    });
    cy.fixture(`../../../bundles/transformations/Allocate a Pair of Numbers - IAP.json`).then((data) => {
      AllocateaPairofNumbersIAP = data;
    });
    cy.fixture(`../../../bundles/transformations/Allocate One Number - IAP.json`).then((data) => {
      AllocateOneNumberIAP = data;
    });
    cy.fixture(`../../../bundles/transformations/Chunk Array - IAP.json`).then((data) => {
      ChunkArrayIAP = data;
    });
    cy.fixture(`../../../bundles/transformations/Clear Empty Keys - IAP.json`).then((data) => {
      ClearEmptyKeysIAP = data;
    });
    cy.fixture(`../../../bundles/transformations/Convert CSV to JSON - IAP.json`).then((data) => {
      ConvertCSVtoJSONIAP = data;
    });
    cy.fixture(`../../../bundles/transformations/Convert String to Special Cases - IAP.json`).then((data) => {
      ConvertStringtoSpecialCasesIAP = data;
    });
    cy.fixture(`../../../bundles/transformations/Filter Array of Objects by Key Value Pair - IAP.json`).then((data) => {
      FilterArrayofObjectsbyKeyValuePairIAP = data;
    });
    cy.fixture(`../../../bundles/transformations/Generate Random Integer Within Range - IAP.json`).then((data) => {
      GenerateRandomIntegerWithinRangeIAP = data;
    });
    cy.fixture(`../../../bundles/transformations/Get Random Element From Array - IAP.json`).then((data) => {
      GetRandomElementFromArrayIAP = data;
    });
    cy.fixture(`../../../bundles/transformations/Get Value From JSON Pointer - IAP.json`).then((data) => {
      GetValueFromJSONPointerIAP = data;
    });
    cy.fixture(`../../../bundles/transformations/Group Records by Property - IAP.json`).then((data) => {
      GroupRecordsbyPropertyIAP = data;
    });
    cy.fixture(`../../../bundles/transformations/Parse Number - IAP.json`).then((data) => {
      ParseNumberIAP = data;
    });
    cy.fixture(`../../../bundles/transformations/Remove Duplicates From Array of Arrays or Objects - IAP.json`).then((data) => {
      RemoveDuplicatesFromArrayofArraysorObjectsIAP = data;
    });
    cy.fixture(`../../../bundles/transformations/Remove Duplicates From Array of Primitives - IAP.json`).then((data) => {
      RemoveDuplicatesFromArrayofPrimitivesIAP = data;
    });
    cy.fixture(`../../../bundles/transformations/Remove Element From Array by Index - IAP.json`).then((data) => {
      RemoveElementFromArraybyIndexIAP = data;
    });
    cy.fixture(`../../../bundles/transformations/Remove Element From Array by Value - IAP.json`).then((data) => {
      RemoveElementFromArraybyValueIAP = data;
    });
    cy.fixture(`../../../bundles/transformations/Separate Array of Objects by Key Value Pair - IAP.json`).then((data) => {
      SeparateArrayofObjectsbyKeyValuePairIAP = data;
    });
    cy.fixture(`../../../bundles/transformations/Split String into Array by Regex or Separator - IAP.json`).then((data) => {
      SplitStringintoArraybyRegexorSeparatorIAP = data;
    });
    cy.fixture(`../../../bundles/transformations/Transpose Record by Creating Arrays for Each Property Within Groups - IAP.json`).then((data) => {
      TransposeRecordbyCreatingArraysforEachPropertyWithinGroupsIAP = data;
    });
  });

  after(function() {
    prebuiltRunner.deletePrebuilt.single({ failOnStatusCode: false });
  });

  describe('Default: Imports Project', function () {
    // eslint-disable-next-line mocha/no-hooks-for-single-case
    it('Default: Should import the Project into IAP', function () {
        prebuiltRunner.deletePrebuilt.single({ failOnStatusCode: false });
        prebuiltRunner.importPrebuilt.single({});
    });
  });

  describe('Aggregate Functions for Arrays - IAP', function() {
    it('It should return the expected results', function () {
      const importTransformation = true;
      const transformationRunner = initializeWorkflowRunner(AggregateFunctionsforArraysIAP, importTransformation);
      transformationRunner.transformationRun.run({
        incoming: {
          "groupedArray": [
            1,
            2,
            3
          ]
        },
        options: {
          validateIncoming: true,
          extractOutput: true,
          revertToDefaultValue: true,
        },
        expectedOutput: {
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
        },
      });    
    });
  });

  describe('Allocate a Pair of Numbers - IAP', function() {
    it('It should return the next available pair', function () {
      const importTransformation = true;
      const transformationRunner = initializeWorkflowRunner(AllocateaPairofNumbersIAP, importTransformation);
      transformationRunner.transformationRun.run({
        incoming: {
          "allocated": [
            1,
            4,
            5
          ],
          "startRange": 5,
          "endRange": 8
        },
        options: {
          validateIncoming: true,
          extractOutput: true,
          revertToDefaultValue: true,
        },
        expectedOutput: {
          "assigned": [
            6,
            7
          ]
        }
      });    
    });
    it('It should return false if there is no available pair', function () {
      const importTransformation = true;
      const transformationRunner = initializeWorkflowRunner(AllocateaPairofNumbersIAP, importTransformation);
      transformationRunner.transformationRun.run({
        incoming: {
          "allocated": [
            1,
            4,
            5,
            7
          ],
          "startRange": 5,
          "endRange": 8
        },
        options: {
          validateIncoming: true,
          extractOutput: true,
          revertToDefaultValue: true,
        },
        expectedOutput: {
          "assigned": false
        }
      });    
    });
  });

  describe('Allocate One Number - IAP', function() {
    it('It should return 2 for the next available number', function () {
      const importTransformation = true;
      const transformationRunner = initializeWorkflowRunner(AllocateOneNumberIAP, importTransformation);
      transformationRunner.transformationRun.run({
        incoming: {
          "allocated": [
            1
          ],
          "startRange": 2,
          "endRange": 3
        },
        options: {
          validateIncoming: true,
          extractOutput: true,
          revertToDefaultValue: true,
        },
        expectedOutput: {
          "assigned": 2
        }
      });    
    });
    it('It should return false if there is no number available', function () {
      const importTransformation = true;
      const transformationRunner = initializeWorkflowRunner(AllocateOneNumberIAP, importTransformation);
      transformationRunner.transformationRun.run({
        incoming: {
          "allocated": [
            1
          ],
          "startRange": 2,
          "endRange": 2
        },
        options: {
          validateIncoming: true,
          extractOutput: true,
          revertToDefaultValue: true,
        },
        expectedOutput: {
          "assigned": false
        }
      });    
    });
  });

  describe('Chunk Array - IAP', function() {
    it('It should return the expected results - the original array splitted into chunks', function () {
      const importTransformation = true;
      const transformationRunner = initializeWorkflowRunner(ChunkArrayIAP, importTransformation);
      transformationRunner.transformationRun.run({
        incoming: {
          "originalArray": [
            1,
            2,
            3,
            "a",
            "b"
          ],
          "chunkSize": 3
        },
        options: {
          validateIncoming: true,
          extractOutput: true,
          revertToDefaultValue: true,
        },
        expectedOutput: [
          [
            1,
            2,
            3
          ],
          [
            "a",
            "b"
          ]
        ]
      });    
    });
  });

  describe('Clear Empty Keys - IAP', function() {
    it('It should remove the keys that have empty objects, empty array, empty string, and null values', function () {
      const importTransformation = true;
      const transformationRunner = initializeWorkflowRunner(ClearEmptyKeysIAP, importTransformation);
      transformationRunner.transformationRun.run({
        incoming: {
          "input": {
            "firstName": "John",
            "lastName": "",
            "age": "30",
            "address": {},
            "hobbies": [],
            "school": null
          }
        },
        options: {
          validateIncoming: true,
          extractOutput: true,
          revertToDefaultValue: true,
        },
        expectedOutput: {
          "firstName": "John",
          "age": "30"
        }
      });    
    });
  });

  describe('Convert CSV to JSON - IAP', function() {
    it('It should return the expected results - CSV string is converted to JSON', function () {
      const importTransformation = true;
      const transformationRunner = initializeWorkflowRunner(ConvertCSVtoJSONIAP, importTransformation);
      transformationRunner.transformationRun.run({
        incoming: {
          "csv": "a,b,c,d,e,f\n1,2,3,4,5,7,8,9,0\n5,4,3,2,1\n1,2,3,4,5"
        },
        options: {
          validateIncoming: true,
          extractOutput: true,
          revertToDefaultValue: true,
        },
        expectedOutput: [
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
        ]
      });    
    });
  });

  describe('Convert String to Special Cases - IAP', function() {
    it('It should return the expected results - the original string is converted to special cases', function () {
      const importTransformation = true;
      const transformationRunner = initializeWorkflowRunner(ConvertStringtoSpecialCasesIAP, importTransformation);
      transformationRunner.transformationRun.run({
        incoming: {
          "incomingString": "foo bar foobar"
        },
        options: {
          validateIncoming: true,
          extractOutput: true,
          revertToDefaultValue: true,
        },
        expectedOutput: {
          "toCamelCase": "fooBarFoobar",
          "toSnakeCase": "foo_bar_foobar",
          "toKebabCase": "foo-bar-foobar",
          "toPascalCase": "FooBarFoobar"
        }
      });    
    });
  });

  describe('Filter Array of Objects by Key Value Pair - IAP', function() {
    it('It should return the expected results - the output array contains non-matching objects if discardMatching is set to true', function () {
      const importTransformation = true;
      const transformationRunner = initializeWorkflowRunner(FilterArrayofObjectsbyKeyValuePairIAP, importTransformation);
      transformationRunner.transformationRun.run({
        incoming: {
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
        },
        options: {
          validateIncoming: true,
          extractOutput: true,
          revertToDefaultValue: true,
        },
        expectedOutput: {
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
        }
      });    
    });
    it('It should return the expected results - the output array contains matching objects if discardMatching is set to false', function () {
      const importTransformation = true;
      const transformationRunner = initializeWorkflowRunner(FilterArrayofObjectsbyKeyValuePairIAP, importTransformation);
      transformationRunner.transformationRun.run({
        incoming: {
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
        },
        options: {
          validateIncoming: true,
          extractOutput: true,
          revertToDefaultValue: true,
        },
        expectedOutput: {
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
        }
      });    
    });
  });

  describe('Generate Random Integer Within Range - IAP', function() {
    it('It should return the expected results - inclusive of both min and max', function () {
      const importTransformation = true;
      const transformationRunner = initializeWorkflowRunner(GenerateRandomIntegerWithinRangeIAP, importTransformation);
      transformationRunner.transformationRun.run({
        incoming: {
          "minimum": 2,
          "maximum": 2
        },
        options: {
          validateIncoming: true,
          extractOutput: true,
          revertToDefaultValue: true,
        },
        expectedOutput: 2
      });    
    });
  });

  describe('Get Random Element From Array - IAP', function() {
    it('It should return the expected results', function () {
      const importTransformation = true;
      const transformationRunner = initializeWorkflowRunner(GetRandomElementFromArrayIAP, importTransformation);
      transformationRunner.transformationRun.run({
        incoming: {
          "array": [
            {
              "city": "Atlanta",
              "state": "GA"
            }
          ]
        },
        options: {
          validateIncoming: true,
          extractOutput: true,
          revertToDefaultValue: true,
        },
        expectedOutput: {
          "arrayWithoutElement": [],
          "randomElement": {
            "city": "Atlanta",
            "state": "GA"
          },
          "randomElementIndex": 0,
          "poppedArrayLength": 0
        }
      });    
    });
  });

  describe('Get Value From JSON Pointer - IAP', function() {
    it('It should return the expected results with a valid JSON pointer', function () {
      const importTransformation = true;
      const transformationRunner = initializeWorkflowRunner(GetValueFromJSONPointerIAP, importTransformation);
      transformationRunner.transformationRun.run({
        incoming: {
          "jsonPointer": "/a/b",
          "obj": {
            "a": {
              "b": 2,
              "c": 3
            }
          }
        },
        options: {
          validateIncoming: true,
          extractOutput: true,
          revertToDefaultValue: true,
        },
        expectedOutput: 2
      });    
    });
  });

  describe('Group Records by Property - IAP', function() {
    it('It should return the expected results which has each group represented as an array', function () {
      const importTransformation = true;
      const transformationRunner = initializeWorkflowRunner(GroupRecordsbyPropertyIAP, importTransformation);
      transformationRunner.transformationRun.run({
        incoming: {
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
        },
        options: {
          validateIncoming: true,
          extractOutput: true,
          revertToDefaultValue: true,
        },
        expectedOutput: {
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
        }
      });    
    });
  });

  describe('Parse Number - IAP', function() {
    it('It should parse number of the provided keys', function () {
      const importTransformation = true;
      const transformationRunner = initializeWorkflowRunner(ParseNumberIAP, importTransformation);
      transformationRunner.transformationRun.run({
        incoming: {
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
        },
        options: {
          validateIncoming: true,
          extractOutput: true,
          revertToDefaultValue: true,
        },
        expectedOutput: {
          "fruit": "apple",
          "quantity": "30",
          "price": 42.2,
          "aisle": "23b"
        }
      });    
    });
    it('It should parse number of all keys if keysToConvert is not provided', function () {
      const importTransformation = true;
      const transformationRunner = initializeWorkflowRunner(ParseNumberIAP, importTransformation);
      transformationRunner.transformationRun.run({
        incoming: {
          "keysToConvert": [],
          "data": {
            "fruit": "apple",
            "quantity": "30",
            "price": "42.2",
            "aisle": "23b"
          }
        },
        options: {
          validateIncoming: true,
          extractOutput: true,
          revertToDefaultValue: true,
        },
        expectedOutput: {
          "fruit": "apple",
          "quantity": 30,
          "price": 42.2,
          "aisle": "23b"
        }
      });    
    });
  });

  describe('Remove Duplicates From Array of Arrays or Objects - IAP', function() {
    it('It should return the expected results if the input is an array of objects', function () {
      const importTransformation = true;
      const transformationRunner = initializeWorkflowRunner(RemoveDuplicatesFromArrayofArraysorObjectsIAP, importTransformation);
      transformationRunner.transformationRun.run({
        incoming: {
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
        },
        options: {
          validateIncoming: true,
          extractOutput: true,
          revertToDefaultValue: true,
        },
        expectedOutput: [
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
        ]
      });    
    });
    it('It should return the expected results if the input is an array of arrays', function () {
      const importTransformation = true;
      const transformationRunner = initializeWorkflowRunner(RemoveDuplicatesFromArrayofArraysorObjectsIAP, importTransformation);
      transformationRunner.transformationRun.run({
        incoming: {
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
        },
        options: {
          validateIncoming: true,
          extractOutput: true,
          revertToDefaultValue: true,
        },
        expectedOutput: [
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
        ]
      });    
    });
  });

  describe('Remove Duplicates From Array of Primitives - IAP', function() {
    it('It should return the expected results which has all duplicates removed', function () {
      const importTransformation = true;
      const transformationRunner = initializeWorkflowRunner(RemoveDuplicatesFromArrayofPrimitivesIAP, importTransformation);
      transformationRunner.transformationRun.run({
        incoming: {
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
        },
        options: {
          validateIncoming: true,
          extractOutput: true,
          revertToDefaultValue: true,
        },
        expectedOutput: [
          "hello",
          "world",
          null,
          true,
          "HeLLo"
        ]
      });    
    });
  });

  describe('Remove Element From Array by Index - IAP', function() {
    it('It should return the expected results if the input is an array of primitives', function () {
      const importTransformation = true;
      const transformationRunner = initializeWorkflowRunner(RemoveElementFromArraybyIndexIAP, importTransformation);
      transformationRunner.transformationRun.run({
        incoming: {
          "array": [
            9,
            8,
            7.45,
            77,
            7
          ],
          "index": 1
        },
        options: {
          validateIncoming: true,
          extractOutput: true,
          revertToDefaultValue: true,
        },
        expectedOutput: {
          "newArray": [
            9,
            7.45,
            77,
            7
          ],
          "item": 8
        }
      });    
    });
    it('It should return the expected results if the input is an array of objects', function () {
      const importTransformation = true;
      const transformationRunner = initializeWorkflowRunner(RemoveElementFromArraybyIndexIAP, importTransformation);
      transformationRunner.transformationRun.run({
        incoming: {
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
        },
        options: {
          validateIncoming: true,
          extractOutput: true,
          revertToDefaultValue: true,
        },
        expectedOutput: {
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
        }
      });    
    });
    it('It should remove 0 element from the array if the input index is not available', function () {
      const importTransformation = true;
      const transformationRunner = initializeWorkflowRunner(RemoveElementFromArraybyIndexIAP, importTransformation);
      transformationRunner.transformationRun.run({
        incoming: {
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
          "index": 5
        },
        options: {
          validateIncoming: true,
          extractOutput: true,
          revertToDefaultValue: true,
        },
        expectedOutput: {
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
          "item":"__undefined"
        }
      });    
    });
  });

  describe('Remove Element From Array by Value - IAP', function() {
    it('It should remove all elements in the array by value if removeAll is set to true', function () {
      const importTransformation = true;
      const transformationRunner = initializeWorkflowRunner(RemoveElementFromArraybyValueIAP, importTransformation);
      transformationRunner.transformationRun.run({
        incoming: {
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
        },
        options: {
          validateIncoming: true,
          extractOutput: true,
          revertToDefaultValue: true,
        },
        expectedOutput: {
          "newArray": [
            9,
            8,
            7.45,
            77
          ],
          "noOfRemovedItems": 2
        }
      });    
    });
    it('It should remove the first occurrence of the value if removeAll is set to false', function () {
      const importTransformation = true;
      const transformationRunner = initializeWorkflowRunner(RemoveElementFromArraybyValueIAP, importTransformation);
      transformationRunner.transformationRun.run({
        incoming: {
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
        },
        options: {
          validateIncoming: true,
          extractOutput: true,
          revertToDefaultValue: true,
        },
        expectedOutput: {
          "newArray": [
            9,
            8,
            7.45,
            77,
            7
          ],
          "noOfRemovedItems": 1
        }
      });    
    });
    it('It should remove 0 element if the provided value is not found in the array', function () {
      const importTransformation = true;
      const transformationRunner = initializeWorkflowRunner(RemoveElementFromArraybyValueIAP, importTransformation);
      transformationRunner.transformationRun.run({
        incoming: {
          "array": [
            7,
            9,
            8,
            "hi"
          ],
          "value": "hello",
          "removeAll": false
        },
        options: {
          validateIncoming: true,
          extractOutput: true,
          revertToDefaultValue: true,
        },
        expectedOutput: {
          "newArray": [
            7,
            9,
            8,
            "hi"
          ],
          "noOfRemovedItems": 0
        }
      });    
    });
  });

  describe('Separate Array of Objects by Key Value Pair - IAP', function() {
    it('It should return the expected results which separates the array into matching and nonMatching arrays', function () {
      const importTransformation = true;
      const transformationRunner = initializeWorkflowRunner(SeparateArrayofObjectsbyKeyValuePairIAP, importTransformation);
      transformationRunner.transformationRun.run({
        incoming: {
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
        },
        options: {
          validateIncoming: true,
          extractOutput: true,
          revertToDefaultValue: true,
        },
        expectedOutput: {
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
        }
      });    
    });
  });

  describe('Split String into Array by Regex or Separator - IAP', function() {
    it('It should split string into an array if the string used as a separator is provided', function () {
      const importTransformation = true;
      const transformationRunner = initializeWorkflowRunner(SplitStringintoArraybyRegexorSeparatorIAP, importTransformation);
      transformationRunner.transformationRun.run({
        incoming: {
          "inputString": "Hello123world-456,2024",
          "separatorString": "o",
          "separatorRegex": "/\\d+/gm",
          "limit": 2
        },
        options: {
          validateIncoming: true,
          extractOutput: true,
          revertToDefaultValue: true,
        },
        expectedOutput: [
          "Hell",
          "123w"
        ]
      });    
    });
    it('It should split string into an array by regex if the regex used as a separator is provided', function () {
      const importTransformation = true;
      const transformationRunner = initializeWorkflowRunner(SplitStringintoArraybyRegexorSeparatorIAP, importTransformation);
      transformationRunner.transformationRun.run({
        incoming: {
          "inputString": "Hello123world-456,2024",
          "separatorString": "",
          "separatorRegex": "/\\d+/gm",
          "limit": null
        },
        options: {
          validateIncoming: true,
          extractOutput: true,
          revertToDefaultValue: true,
        },
        expectedOutput: [
          "Hello",
          "world-",
          ",",
          ""
        ]
      });    
    });
  });

  describe('Transpose Record by Creating Arrays for Each Property Within Groups - IAP', function() {
    it('It should return the expected results - each property within the groups is transformed into an array', function () {
      const importTransformation = true;
      const transformationRunner = initializeWorkflowRunner(TransposeRecordbyCreatingArraysforEachPropertyWithinGroupsIAP, importTransformation);
      transformationRunner.transformationRun.run({
        incoming: {
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
        },
        options: {
          validateIncoming: true,
          extractOutput: true,
          revertToDefaultValue: true,
        },
        expectedOutput: {
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
        }
      });    
    });
  });
});