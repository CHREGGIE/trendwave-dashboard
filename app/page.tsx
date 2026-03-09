"use client";

import { Card, Metric, Text, Flex, Grid, BarChart } from "@tremor/react";

export default function DashboardPage() {
  const data = [
    { name: "Mon", value: 12 },
    { name: "Tue", value: 18 },
    { name: "Wed", value: 10 },
    { name: "Thu", value: 22 },
    { name: "Fri", value: 15 },
  ];

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-semibold">Dashboard Overview</h2>

      <Grid numItemsSm={2} numItemsLg={4} className="gap-6">
        <Card>
          <Text>Total Clients</Text>
          <Metric>42</Metric>
        </Card>

        <Card>
          <Text>Active Campaigns</Text>
          <Metric>17</Metric>
        </Card>

        <Card>
          <Text>Avg. Visibility Score</Text>
          <Metric>78%</Metric>
        </Card>

        <Card>
          <Text>New Alerts</Text>
          <Metric>5</Metric>
        </Card>
      </Grid>

      <Card>
        <Text className="mb-4">Weekly Activity</Text>
        <BarChart
          data={data}
          index="name"
          categories={["value"]}
          colors={["blue"]}
          yAxisWidth={40}
        />
      </Card>
    </div>
  );
}
