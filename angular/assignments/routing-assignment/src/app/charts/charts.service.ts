export class ChartsService {
    private charts = [
        {
          id: 1,
          name: 'Basic Chart',
          status: 'offline'
        },
        {
          id: 2,
          name: 'Standard Chart',
          status: 'offline'
        },
        {
          id: 3,
          name: 'Advanced Chart',
          status: 'offline'
        }
    ]

    getCharts() {
        return this.charts;
    }

    getChart(id: number) {
        const chart = this.charts.find(
            (c) => {
                return c.id === id;
            }
        )
        return chart;
    }

    updateInfo(id: number, chartInfo: {name: string, status: string}) {
        const chart = this.charts.find(
            (c) => {
                return c.id === id;
            }
        )
        if (chart) {
            chart.name = chartInfo.name;
            chart.status = chartInfo.status;
        }
    }
}