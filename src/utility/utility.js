function getFormSetting() {
    return {
        cpc: {
            data: {
                title: 'Customer Acquisiotion Cost',
                subtitle: 'A small calculator to calculate the amount you need to spend to acquire new customers',
                forms: [{
                        id: 'market_size1',
                        label: 'Total Users',
                        explain: 'Total number users who would see your ads per day',
                        type: 'input',
                        value: 0
                    },
                    {
                        id: 'market_size2',
                        label: 'Impressions per user',
                        explain: 'Number of times an user could see your ad',
                        type: 'input',
                        value: 0
                    },
                    {
                        id: 'market_size3',
                        label: 'Click percentage',
                        explain: 'What percentage of users could click on the ad',
                        type: 'input',
                        value: 0
                    },
                    {
                        id: 'market_size4',
                        label: 'Average Customer Acquisition cost',
                        explain: 'Average amount you have to invest to acquire a customer',
                        type: 'input',
                        value: 0
                    },
                ],
                result: (a, b, c, d) => {
                    return (a || 1) * (b || 1) * ((c || 100) / 100 || 1) * (d || 1);
                },
                result_unit: 'Total amount you have to investment'
            }
        },
        ae: {
            data: {
                title: 'Ads Earning',
                subtitle: 'How much you could earn from Ad sense',
                forms: [{
                        id: 'inp1',
                        label: 'Active users per day',
                        explain: 'Total number of users who could see your ad in a day',
                        type: 'input',
                        value: 0
                    },
                    {
                        id: 'inp2',
                        label: 'Impressions per day',
                        explain: 'Total number of times users sees an advertisement in a day',
                        type: 'input',
                        value: 0
                    },
                    {
                        id: 'inp3',
                        label: 'Click percentage',
                        explain: 'percentage of user who would click on an advertisement when they see it',
                        type: 'input',
                        value: 0
                    },
                    {
                        id: 'inp4',
                        label: 'Price per click',
                        explain: 'Amount you would get when an user clicks an advertisement',
                        type: 'input',
                        value: 0
                    }
                ],
                result: (a, b, c, d) => {
                    return (a || 1) * (b || 1) * ((c || 100) / 100 || 1) * (d || 1);
                },
                result_unit: 'Total amount you would earn in a day'
            }
        },
        inv: {
            data: {
                title: 'Returns calculator',
                subtitle: 'Calculate the returns you would get against your investment',
                forms: [{
                        id: 'inp1',
                        label: 'Investment',
                        explain: 'Amount which you would like to invest?',
                        type: 'input',
                        value: 0
                    },
                    {
                        id: 'inp2',
                        label: 'Time (in years)',
                        explain: 'The time for which you want your money to be invested',
                        type: 'input',
                        value: 0
                    },
                    {
                        id: 'inp3',
                        label: 'Interest Percentage',
                        explain: 'Return percentage which would be applied(per year) to your investment',
                        type: 'input',
                        value: 0
                    }
                ],
                result: (investment, years, rate) => {
                    return ((investment || 1) * (Math.pow(1 + (rate || 0)/100, (years || 0)))).toFixed(2);
                    // return (a || 1) * (b || 1) * ((c || 100) / 100 || 1) * (d || 1);
                },
                result_unit: 'Total amount you would earn after the specified years'
            }
        }
    };
}

export {
    getFormSetting
}