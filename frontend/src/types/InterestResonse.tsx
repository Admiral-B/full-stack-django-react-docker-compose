import { IChartValue } from "./ChartValue";

export interface IInterestResponse {
    main_series: IChartValue[],
    plus_one_series: IChartValue[],
    plus_two_series: IChartValue[]
}

export class InterestResponse implements IInterestResponse {
    main_series: IChartValue[] = [
        {
            "Year": 0,
            "Amount": 1967
        },
        {
            "Year": 1,
            "Amount": 8110.02
        },
        {
            "Year": 2,
            "Amount": 14439.88
        },
        {
            "Year": 3,
            "Amount": 20962.28
        },
        {
            "Year": 4,
            "Amount": 27683.06
        },
        {
            "Year": 5,
            "Amount": 34608.26
        },
        {
            "Year": 6,
            "Amount": 41744.09
        },
        {
            "Year": 7,
            "Amount": 49096.97
        },
        {
            "Year": 8,
            "Amount": 56673.49
        },
        {
            "Year": 9,
            "Amount": 64480.46
        },
        {
            "Year": 10,
            "Amount": 72524.89
        },
        {
            "Year": 11,
            "Amount": 80813.99
        },
        {
            "Year": 12,
            "Amount": 89355.22
        },
        {
            "Year": 13,
            "Amount": 98156.24
        },
        {
            "Year": 14,
            "Amount": 107224.94
        },
        {
            "Year": 15,
            "Amount": 116569.48
        },
        {
            "Year": 16,
            "Amount": 126198.25
        },
        {
            "Year": 17,
            "Amount": 136119.88
        },
        {
            "Year": 18,
            "Amount": 146343.29
        },
        {
            "Year": 19,
            "Amount": 156877.65
        },
        {
            "Year": 20,
            "Amount": 167732.42
        },
        {
            "Year": 21,
            "Amount": 178917.36
        },
        {
            "Year": 22,
            "Amount": 190442.49
        },
        {
            "Year": 23,
            "Amount": 202318.17
        },
        {
            "Year": 24,
            "Amount": 214555.07
        },
        {
            "Year": 25,
            "Amount": 227164.16
        },
        {
            "Year": 26,
            "Amount": 240156.76
        },
        {
            "Year": 27,
            "Amount": 253544.55
        },
        {
            "Year": 28,
            "Amount": 267339.54
        },
        {
            "Year": 29,
            "Amount": 281554.12
        },
        {
            "Year": 30,
            "Amount": 296201.05
        },
        {
            "Year": 31,
            "Amount": 311293.48
        },
        {
            "Year": 32,
            "Amount": 326844.96
        },
        {
            "Year": 33,
            "Amount": 342869.45
        },
        {
            "Year": 34,
            "Amount": 359381.35
        },
        {
            "Year": 35,
            "Amount": 376395.47
        },
        {
            "Year": 36,
            "Amount": 393927.09
        },
        {
            "Year": 37,
            "Amount": 411991.95
        },
        {
            "Year": 38,
            "Amount": 430606.27
        },
        {
            "Year": 39,
            "Amount": 449786.76
        },
        {
            "Year": 40,
            "Amount": 469550.65
        },
        {
            "Year": 41,
            "Amount": 489915.67
        },
        {
            "Year": 42,
            "Amount": 510900.12
        },
        {
            "Year": 43,
            "Amount": 532522.82
        },
        {
            "Year": 44,
            "Amount": 554803.21
        },
        {
            "Year": 45,
            "Amount": 577761.27
        },
        {
            "Year": 46,
            "Amount": 601417.62
        },
        {
            "Year": 47,
            "Amount": 625793.51
        },
        {
            "Year": 48,
            "Amount": 650910.81
        },
        {
            "Year": 49,
            "Amount": 676792.07
        },
        {
            "Year": 50,
            "Amount": 703460.54
        }
    ];
    plus_one_series: IChartValue[] = [
        {
            "Year": 0,
            "Amount": 1967
        },
        {
            "Year": 1,
            "Amount": 8158.37
        },
        {
            "Year": 2,
            "Amount": 14601.99
        },
        {
            "Year": 3,
            "Amount": 21308.12
        },
        {
            "Year": 4,
            "Amount": 28287.48
        },
        {
            "Year": 5,
            "Amount": 35551.19
        },
        {
            "Year": 6,
            "Amount": 43110.83
        },
        {
            "Year": 7,
            "Amount": 50978.46
        },
        {
            "Year": 8,
            "Amount": 59166.64
        },
        {
            "Year": 9,
            "Amount": 67688.41
        },
        {
            "Year": 10,
            "Amount": 76557.37
        },
        {
            "Year": 11,
            "Amount": 85787.67
        },
        {
            "Year": 12,
            "Amount": 95394.02
        },
        {
            "Year": 13,
            "Amount": 105391.75
        },
        {
            "Year": 14,
            "Amount": 115796.81
        },
        {
            "Year": 15,
            "Amount": 126625.78
        },
        {
            "Year": 16,
            "Amount": 137895.94
        },
        {
            "Year": 17,
            "Amount": 149625.26
        },
        {
            "Year": 18,
            "Amount": 161832.46
        },
        {
            "Year": 19,
            "Amount": 174536.99
        },
        {
            "Year": 20,
            "Amount": 187759.13
        },
        {
            "Year": 21,
            "Amount": 201519.96
        },
        {
            "Year": 22,
            "Amount": 215841.43
        },
        {
            "Year": 23,
            "Amount": 230746.37
        },
        {
            "Year": 24,
            "Amount": 246258.56
        },
        {
            "Year": 25,
            "Amount": 262402.75
        },
        {
            "Year": 26,
            "Amount": 279204.67
        },
        {
            "Year": 27,
            "Amount": 296691.13
        },
        {
            "Year": 28,
            "Amount": 314890.02
        },
        {
            "Year": 29,
            "Amount": 333830.36
        },
        {
            "Year": 30,
            "Amount": 353542.35
        },
        {
            "Year": 31,
            "Amount": 374057.45
        },
        {
            "Year": 32,
            "Amount": 395408.35
        },
        {
            "Year": 33,
            "Amount": 417629.13
        },
        {
            "Year": 34,
            "Amount": 440755.22
        },
        {
            "Year": 35,
            "Amount": 464823.5
        },
        {
            "Year": 36,
            "Amount": 489872.36
        },
        {
            "Year": 37,
            "Amount": 515941.74
        },
        {
            "Year": 38,
            "Amount": 543073.24
        },
        {
            "Year": 39,
            "Amount": 571310.11
        },
        {
            "Year": 40,
            "Amount": 600697.4
        },
        {
            "Year": 41,
            "Amount": 631281.97
        },
        {
            "Year": 42,
            "Amount": 663112.6
        },
        {
            "Year": 43,
            "Amount": 696240.06
        },
        {
            "Year": 44,
            "Amount": 730717.19
        },
        {
            "Year": 45,
            "Amount": 766598.96
        },
        {
            "Year": 46,
            "Amount": 803942.62
        },
        {
            "Year": 47,
            "Amount": 842807.71
        },
        {
            "Year": 48,
            "Amount": 883256.23
        },
        {
            "Year": 49,
            "Amount": 925352.69
        },
        {
            "Year": 50,
            "Amount": 969164.21
        }
    ];
    plus_two_series: IChartValue[] = [
        {
            "Year": 0,
            "Amount": 1967
        },
        {
            "Year": 1,
            "Amount": 8207.06
        },
        {
            "Year": 2,
            "Amount": 14766.38
        },
        {
            "Year": 3,
            "Amount": 21661.28
        },
        {
            "Year": 4,
            "Amount": 28908.94
        },
        {
            "Year": 5,
            "Amount": 36527.41
        },
        {
            "Year": 6,
            "Amount": 44535.65
        },
        {
            "Year": 7,
            "Amount": 52953.6
        },
        {
            "Year": 8,
            "Amount": 61802.24
        },
        {
            "Year": 9,
            "Amount": 71103.59
        },
        {
            "Year": 10,
            "Amount": 80880.81
        },
        {
            "Year": 11,
            "Amount": 91158.25
        },
        {
            "Year": 12,
            "Amount": 101961.51
        },
        {
            "Year": 13,
            "Amount": 113317.48
        },
        {
            "Year": 14,
            "Amount": 125254.44
        },
        {
            "Year": 15,
            "Amount": 137802.13
        },
        {
            "Year": 16,
            "Amount": 150991.77
        },
        {
            "Year": 17,
            "Amount": 164856.23
        },
        {
            "Year": 18,
            "Amount": 179430.01
        },
        {
            "Year": 19,
            "Amount": 194749.42
        },
        {
            "Year": 20,
            "Amount": 210852.6
        },
        {
            "Year": 21,
            "Amount": 227779.64
        },
        {
            "Year": 22,
            "Amount": 245572.71
        },
        {
            "Year": 23,
            "Amount": 264276.1
        },
        {
            "Year": 24,
            "Amount": 283936.4
        },
        {
            "Year": 25,
            "Amount": 304602.55
        },
        {
            "Year": 26,
            "Amount": 326326.02
        },
        {
            "Year": 27,
            "Amount": 349160.91
        },
        {
            "Year": 28,
            "Amount": 373164.07
        },
        {
            "Year": 29,
            "Amount": 398395.28
        },
        {
            "Year": 30,
            "Amount": 424917.37
        },
        {
            "Year": 31,
            "Amount": 452796.38
        },
        {
            "Year": 32,
            "Amount": 482101.73
        },
        {
            "Year": 33,
            "Amount": 512906.39
        },
        {
            "Year": 34,
            "Amount": 545287.09
        },
        {
            "Year": 35,
            "Amount": 579324.44
        },
        {
            "Year": 36,
            "Amount": 615103.2
        },
        {
            "Year": 37,
            "Amount": 652712.48
        },
        {
            "Year": 38,
            "Amount": 692245.91
        },
        {
            "Year": 39,
            "Amount": 733801.96
        },
        {
            "Year": 40,
            "Amount": 777484.09
        },
        {
            "Year": 41,
            "Amount": 823401.07
        },
        {
            "Year": 42,
            "Amount": 871667.26
        },
        {
            "Year": 43,
            "Amount": 922402.84
        },
        {
            "Year": 44,
            "Amount": 975734.15
        },
        {
            "Year": 45,
            "Amount": 1031793.99
        },
        {
            "Year": 46,
            "Amount": 1090721.96
        },
        {
            "Year": 47,
            "Amount": 1152664.79
        },
        {
            "Year": 48,
            "Amount": 1217776.73
        },
        {
            "Year": 49,
            "Amount": 1286219.93
        },
        {
            "Year": 50,
            "Amount": 1358164.81
        }
    ]
}