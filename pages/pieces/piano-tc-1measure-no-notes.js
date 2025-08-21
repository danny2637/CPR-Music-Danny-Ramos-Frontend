const CONCERT_PITCH_TREBLE_CLEF_MELODY_TEMPLATE = {
  "score-partwise": {
    "$version": "3.1",
    "part-list": {
      "score-part": [
        {
          "part-name": "Piano",
          "voiceMapping": {
            "0": [
              0
            ]
          },
          "staffMapping": [
            {
              "mainVoiceIdx": 0,
              "voices": [
                0
              ],
              "staffUuid": "6e35ea48-9685-0af9-0b27-be6c320d2433"
            }
          ],
          "voiceIdxToUuidMapping": {
            "0": "e6344782-969e-be4b-6fe9-a136740f06c4"
          },
          "voiceUuidToIdxMapping": {
            "e6344782-969e-be4b-6fe9-a136740f06c4": 0
          },
          "part-abbreviation": "Pno.",
          "score-instrument": {
            "instrument-name": "Piano",
            "$id": "P1-I1"
          },
          "midi-instrument": {
            "midi-program": 1,
            "volume": "100",
            "$id": "P1-I1",
            "midi-channel": "1"
          },
          "$id": "P1",
          "uuid": "f1e75a2f-850a-395e-7d5c-b83628bb348a"
        }
      ]
    },
    "measure-list": {
      "score-measure": [
        {
          "uuid": "6200e63d-9199-829d-50e7-865910839cb2"
        }
      ]
    },
    "part": [
      {
        "measure": [
          {
            "note": [
              {
                "rest": {},
                "voice": "1",
                "staff": "1",
                "duration": "1",
                "$adagio-location": {
                  "timePos": 0
                },
                "type": "quarter"
              },
              {
                "rest": {},
                "voice": "1",
                "staff": "1",
                "duration": "1",
                "$adagio-location": {
                  "timePos": 1
                },
                "type": "quarter"
              },
              {
                "rest": {},
                "voice": "1",
                "staff": "1",
                "duration": "1",
                "$adagio-location": {
                  "timePos": 2
                },
                "type": "quarter"
              },
              {
                "rest": {},
                "voice": "1",
                "staff": "1",
                "duration": "1",
                "$adagio-location": {
                  "timePos": 3
                },
                "type": "quarter"
              }
            ],
            "harmony": [],
            "$number": "1",
            "barline": {
              "$location": "right",
              "bar-style": "light-heavy",
              "$adagio-location": {
                "dpq": 1,
                "timePos": 4
              },
              "noteBefore": 3
            },
            "attributes": [
              {
                "divisions": "1",
                "time": {
                  "beats": "4",
                  "beat-type": "4"
                },
                "clef": {
                  "sign": "G",
                  "line": "2"
                },
                "key": {
                  "fifths": "0"
                },
                "staff-details": {
                  "staff-lines": "5"
                },
                "$adagio-time": {
                  "beats": "4",
                  "beat-type": "4"
                },
                "noteBefore": -1,
                "$adagio-location": {
                  "timePos": 0,
                  "dpq": 1
                }
              }
            ],
            "$adagio-restsInsideBeams": false,
            "sound": [
              {
                "$adagio-swing": {
                  "swing": false
                },
                "noteBefore": -1,
                "$adagio-location": {
                  "timePos": 0,
                  "dpq": 1
                }
              },
              {
                "$tempo": "80",
                "noteBefore": -1,
                "$adagio-location": {
                  "timePos": 0,
                  "dpq": 1
                }
              }
            ],
            "direction": [
              {
                "$placement": "above",
                "staff": "1",
                "$adagio-location": {
                  "timePos": 0
                },
                "direction-type": {
                  "metronome": {
                    "per-minute": "80",
                    "beat-unit": "quarter"
                  }
                },
                "noteBefore": -1,
                "$adagio-isFirst": true
              }
            ],
            "$adagio-beatsList": [
              1,
              1,
              1,
              1
            ]
          }
        ],
        "$id": "P1",
        "uuid": "f1e75a2f-850a-395e-7d5c-b83628bb348a"
      }
    ],
    "defaults": {
      "scaling": {
        "millimeters": "7",
        "tenths": "40"
      },
      "page-layout": {
        "page-height": "1596.5714285714287",
        "page-width": "1233.7142857142858",
        "page-margins": {
          "$type": "both",
          "top-margin": "38.857142857142854",
          "bottom-margin": "38.857142857142854",
          "left-margin": "38.857142857142854",
          "right-margin": "38.857142857142854"
        }
      },
      "system-layout": {
        "system-distance": "115.2"
      },
      "staff-layout": {
        "staff-distance": "72.57142857142857"
      },
      "$adagio-measureNumberingStart": 1,
      "word-font": {
        "$font-family": "Century Schoolbook L"
      },
      "$adagio-systemBreakPolicy": {
        "maxNbMeasuresPerLine": 4,
        "forbiddenCounts": {}
      }
    },
    "$adagio-formatVersion": 61,
    "credit": [
      {
        "credit-type": "title",
        "credit-words": "no notes"
      }
    ],
    "work": {
      "work-title": "no notes"
    },
    "identification": {
      "encoding": {
        "software": "Flat",
        "encoding-date": "2025-07-02"
      },
      "source": "https://flat.io/score/67a10afde95ef02937db2abd-no-notes?sharingKey=67103fb611c0c9ae52c740071b02f3e21670e69e117e5b824197213a6d92d21b159f7315a10a8bd728d8cd4d8ff269ef5a4ae208f7fdd0e770a95eb9b4c5a52c"
    }
  }
}

export {
  CONCERT_PITCH_TREBLE_CLEF_MELODY_TEMPLATE
}