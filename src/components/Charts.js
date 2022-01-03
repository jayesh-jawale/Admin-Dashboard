import {
	LineChart,
	ResponsiveContainer,
	Legend,
	Tooltip,
	Line,
	XAxis,
	YAxis,
	PieChart,
	Pie,
	Cell,
} from 'recharts';
import IconButton from '@mui/material/IconButton';
import { MoreVert } from '@mui/icons-material';
import { Divider } from '@mui/material';

export function Charts() {
    const earningsOverview = [
		{
			month: 'Jan',
			Earnings: 0,
		},
		{
			month: 'Feb',
			Earnings: 10000,
		},
		{
			month: 'Mar',
			Earnings: 5000,
		},
		{
			month: 'Apr',
			Earnings: 15000,
		},
		{
			month: 'May',
			Earnings: 10000,
		},
		{
			month: 'Jun',
			Earnings: 20000,
		},
		{
			month: 'Jul',
			Earnings: 15000,
		},
		{
			month: 'Aug',
			Earnings: 25000,
		},
		{
			month: 'Sep',
			Earnings: 20000,
		},
		{
			month: 'Oct',
			Earnings: 30000,
		},
		{
			month: 'Nov',
			Earnings: 25000,
		},
		{
			month: 'Dec',
			Earnings: 35000,
		},
	];

    const revenueSources = [
		{
			name: 'Social',
			color: 'cyan',
			value: 15,
		},
		{
			name: 'Direct',
			color: '#4e73df',
			value: 55,
		},
		{
			name: 'Refferal',
			color: 'green',
			value: 30,
		},
	];
    return (
        <div className="pictorial-charts">
            <div className="earnings-overview">
				<div className="charts-header-title">
					<h3 style={{margin: '10px', color: '#4e73df', fontWeight: '700'}}>Earnings Overview</h3>
					<IconButton>
						<MoreVert />
					</IconButton>
				</div>
				<Divider style={{marginBottom: '20px !important'}} variant="fullWidth" />
				<ResponsiveContainer width="100%" aspect={2}>
					<LineChart
						data={earningsOverview}
						margin={{
							top: 10,
							right: 30,
							left: 20,
							bottom: 5,
						}}
					>
						<XAxis dataKey="month" interval={1} axisLine={false} tickLine={false} />
						<YAxis axisLine={false} tickLine={false} domain={[5000, 40000]} />

						<Tooltip cursor={false} />

						<Line
							type="monotone"
							dataKey="Earnings"
							stroke="#4E73DF"
							strokeWidth={3}
							dot={{ fill: '#4E73DF' }}
							activeDot={{ r: 8 }}
						/>
					</LineChart>
				</ResponsiveContainer>
			</div>

            <div className="revenue-sources-chart">
				<div className="charts-header-title">
					<h3 style={{margin: '20px', color: '#4e73df', fontWeight: '700'}}>Revenue Sources</h3>
					<IconButton>
						<MoreVert />
					</IconButton>
				</div>
				<Divider style={{marginBottom: '20px !important'}} variant="fullWidth" />
				<ResponsiveContainer width="100%" aspect={1.15}>
					<PieChart>
						<Pie
							data={revenueSources}
							dataKey="value"
							nameKey="name"
							cx="50%"
							cy="50%"
							outerRadius={100}
							innerRadius={80}
							fill="#8884d8"
							startAngle={90}
							endAngle={450}
						>
							{revenueSources.map((entry, index) => (
								<Cell key={index} fill={entry.color} />
							))}
						</Pie>
						<Legend iconType={'circle'} />
						<Tooltip />
					</PieChart>
				</ResponsiveContainer>
			</div>

        </div>
    )
}