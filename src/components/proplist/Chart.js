
import React from 'react';
import 'chartjs-plugin-datalabels';
import { PieChart, Pie, Legend, Cell, ResponsiveContainer } from 'recharts';
import './proplist_styles/chart.css';

const Chart = () => {
	const data = [
		{ name: 'Mortgage', amount: 630, color:'#F5C34E' },
		{ name: 'Co-owner', amount: 303, color:'#7731E4' },
		{ name: 'Municipal Taxes', amount: 200, color:'#497C92' },
		{ name: 'School Taxes', amount: 303,color:'#111' }
	];

	return ( 
		<>
		<div className="piechart">
			<div className="chart">
				<ResponsiveContainer width="100%" height={300}>
				<PieChart >
					
						{/* <Legend formatter={(value, entry, index) => <span className="text-color-class">{value}</span>}
						wrapperStyle={{ marginBottom:'20px'}}
							layout="vertical" 
							verticalAlign="bottom"
					
							payload={
									data.map((item,index) => ({
										id: item.name,
										color:item.color,
										// type: "circle",
										value: `${item.name} ${item.amount}`
							})
						)
					}
					
					/> */}
				
					<Pie
							data={data} 
							cx={'56%'}
							cy={'28%'}
							innerRadius={'35%'}
							outerRadius={'55%'} 
							dataKey="amount"
						>
					{
						data.map((entry, index) => <Cell fill={entry.color}/>)
					}	
				
					</Pie>
				
					</PieChart>
				</ResponsiveContainer>
				</div>
								
			<div className="chartvalue">
				<h1> $1533</h1>
				<h6>/monthly</h6>
			</div>
			</div>
			<table className="legend">
				{data.map((item, index) =>
				<tr >
						<td className='col1'> <span style={{ 'background-color': item.color  }} className='filled-circle' ></span></td>
						<td className='col2'>{item.name}  </td> <td className='col3'>    ${item.amount} </td>
				
					</tr>
				)}
  		 </table>
	</>
	);
}

export default Chart;