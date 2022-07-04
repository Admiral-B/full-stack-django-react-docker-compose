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
            "Amount": 500.00
        },
        {
            "Year": 1,
            "Amount": 515.00
        },
        {
            "Year": 2,
            "Amount": 530.45
        },
        {
            "Year": 3,
            "Amount": 546.36
        },
        {
            "Year": 4,
            "Amount": 562.75
        },
        {
            "Year": 5,
            "Amount": 579.64
        },
        {
            "Year": 6,
            "Amount": 597.03
        },
        {
            "Year": 7,
            "Amount": 614.94
        },
        {
            "Year": 8,
            "Amount": 633.39
        },
        {
            "Year": 9,
            "Amount": 652.39
        },
        {
            "Year": 10,
            "Amount": 671.96
        },
        {
            "Year": 11,
            "Amount": 692.12
        },
        {
            "Year": 12,
            "Amount": 712.88
        },
        {
            "Year": 13,
            "Amount": 734.27
        },
        {
            "Year": 14,
            "Amount": 756.29
        },
        {
            "Year": 15,
            "Amount": 778.98
        },
        {
            "Year": 16,
            "Amount": 802.35
        },
        {
            "Year": 17,
            "Amount": 826.42
        },
        {
            "Year": 18,
            "Amount": 851.22
        },
        {
            "Year": 19,
            "Amount": 876.75
        },
        {
            "Year": 20,
            "Amount": 903.06
        }
    ];
    plus_one_series: IChartValue[] = [
        {
            "Year": 0,
            "Amount": 500.00
        },
        {
            "Year": 1,
            "Amount": 520.00
        },
        {
            "Year": 2,
            "Amount": 540.80
        },
        {
            "Year": 3,
            "Amount": 562.43
        },
        {
            "Year": 4,
            "Amount": 584.93
        },
        {
            "Year": 5,
            "Amount": 608.33
        },
        {
            "Year": 6,
            "Amount": 632.66
        },
        {
            "Year": 7,
            "Amount": 657.97
        },
        {
            "Year": 8,
            "Amount": 684.28
        },
        {
            "Year": 9,
            "Amount": 711.66
        },
        {
            "Year": 10,
            "Amount": 740.12
        },
        {
            "Year": 11,
            "Amount": 769.73
        },
        {
            "Year": 12,
            "Amount": 800.52
        },
        {
            "Year": 13,
            "Amount": 832.54
        },
        {
            "Year": 14,
            "Amount": 865.84
        },
        {
            "Year": 15,
            "Amount": 900.47
        },
        {
            "Year": 16,
            "Amount": 936.49
        },
        {
            "Year": 17,
            "Amount": 973.95
        },
        {
            "Year": 18,
            "Amount": 1012.91
        },
        {
            "Year": 19,
            "Amount": 1053.42
        },
        {
            "Year": 20,
            "Amount": 1095.56
        }
    ];
    plus_two_series: IChartValue[] = [
        {
            "Year": 0,
            "Amount": 500.00
        },
        {
            "Year": 1,
            "Amount": 525.00
        },
        {
            "Year": 2,
            "Amount": 551.25
        },
        {
            "Year": 3,
            "Amount": 578.81
        },
        {
            "Year": 4,
            "Amount": 607.75
        },
        {
            "Year": 5,
            "Amount": 638.14
        },
        {
            "Year": 6,
            "Amount": 670.05
        },
        {
            "Year": 7,
            "Amount": 703.55
        },
        {
            "Year": 8,
            "Amount": 738.73
        },
        {
            "Year": 9,
            "Amount": 775.66
        },
        {
            "Year": 10,
            "Amount": 814.45
        },
        {
            "Year": 11,
            "Amount": 855.17
        },
        {
            "Year": 12,
            "Amount": 897.93
        },
        {
            "Year": 13,
            "Amount": 942.82
        },
        {
            "Year": 14,
            "Amount": 989.97
        },
        {
            "Year": 15,
            "Amount": 1039.46
        },
        {
            "Year": 16,
            "Amount": 1091.44
        },
        {
            "Year": 17,
            "Amount": 1146.01
        },
        {
            "Year": 18,
            "Amount": 1203.31
        },
        {
            "Year": 19,
            "Amount": 1263.48
        },
        {
            "Year": 20,
            "Amount": 1326.65
        }
    ]
}