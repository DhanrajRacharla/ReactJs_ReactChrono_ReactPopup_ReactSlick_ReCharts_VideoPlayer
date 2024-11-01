// Bar chart

// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   Legend,
//   ResponsiveContainer,
// } from 'recharts'

// const data = [
//   {
//     group_name: 'Group A',
//     boys: 200,
//     girls: 400,
//   },
//   {
//     group_name: 'Group B',
//     boys: 3000,
//     girls: 500,
//   },
//   {
//     group_name: 'Group C',
//     boys: 1000,
//     girls: 1500,
//   },
//   {
//     group_name: 'Group D',
//     boys: 700,
//     girls: 1200,
//   },
// ]

// const ReCharts = () => {
//   const DataFormatter = number => {
//     console.log(number)
//     if (number > 1000) {
//       return `${(number / 1000).toString()}k`
//     }
//     return number.toString()
//   }

//   return (
//     <ResponsiveContainer width="100%" height={500}>
//       <BarChart
//         data={data}
//         margin={{
//           top: 40,
//         }}
//       >
//         <XAxis
//           dataKey="group_name"
//           tick={{
//             stroke: 'green',
//             strokeWidth: 1,
//           }}
//         />
//         <YAxis
//           tickFormatter={DataFormatter}
//           tick={{
//             stroke: 'gray',
//             strokeWidth: 0,
//           }}
//         />
//         <Legend
//           wrapperStyle={{
//             padding: 30,
//           }}
//         />
//         <Bar dataKey="boys" name="Boys" fill="#1f77b4" barSize="20%" />
//         <Bar dataKey="girls" name="Girls" fill="#fd7f0e" barSize="20%" />
//       </BarChart>
//     </ResponsiveContainer>
//   )
// }

// Pie Chart

import {PieChart, Pie, Legend, Cell, ResponsiveContainer} from 'recharts'

const data = [
  {
    count: 809680,
    language: 'Telugu',
  },
  {
    count: 4555697,
    language: 'Hindi',
  },
  {
    count: 12345657,
    language: 'English',
  },
]

const ReCharts = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          cx="70%"
          cy="40%"
          data={data}
          startAngle={0}
          endAngle={360}
          innerRadius="40%"
          outerRadius="60%"
          dataKey="count"
        >
          <Cell name="Telugu" fill="#fecba6" />
          <Cell name="Hindi" fill="#b3d23f" />
          <Cell name="English" fill="#a44c9e" />
        </Pie>
        <Legend
          iconType="circle"
          layout="vertical"
          verticalAlign="middle"
          align="right"
        />
      </PieChart>
    </ResponsiveContainer>
  )
}

export default ReCharts
