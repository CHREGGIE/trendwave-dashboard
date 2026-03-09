"use client";

import { use } from "react";
import {
  Card,
  Metric,
  Text,
  Grid,
  BarChart,
  Table,
  TableHead,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
} from "@tremor/react";

interface ClientOverviewPageProps {
  params: Promise<{ clientId: string }>;
}

export default function ClientOverviewPage({ params }: ClientOverviewPageProps) {
  const { clientId } = use(params);

  // Example data — replace with real data later
  const driftData = [
    { time: "01:26 PM", drift: 0.12 },
    { time: "11:15 PM", drift: 0.18 },
    { time: "11:13 PM", drift: 0.10 },
    { time: "11:03 PM", drift: 0.22 },
    { time: "11:02 PM", drift: 0.15 },
  ];

  const latencyData = [
    { time: "01:26 PM", latency: 120 },
    { time: "11:15 PM", latency: 180 },
    { time: "11:13 PM", latency: 140 },
    { time: "11:03 PM", latency: 200 },
    { time: "11:02 PM", latency: 160 },
  ];

  return (
    <div className="space-y-10">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-semibold capitalize">{clientId}</h1>
        <p className="text-gray-500 mt-1">
          Model performance, drift, latency, and prompt analytics.
        </p>
      </div>

      {/* KPI Grid */}
      <Grid numItemsSm={2} numItemsLg={4} className="gap-6">
        <Card>
          <Text>Total Prompts</Text>
          <Metric>1,248</Metric>
        </Card>

        <Card>
          <Text>Avg Drift</Text>
          <Metric>0.14</Metric>
        </Card>

        <Card>
          <Text>Avg Latency</Text>
          <Metric>162 ms</Metric>
        </Card>

        <Card>
          <Text>Models Used</Text>
          <Metric>4</Metric>
        </Card>
      </Grid>

      {/* Charts */}
      <Grid numItemsSm={1} numItemsLg={2} className="gap-6">
        <Card>
          <Text className="mb-4">Model Drift</Text>
          <BarChart
            data={driftData}
            index="time"
            categories={["drift"]}
            colors={["blue"]}
            yAxisWidth={40}
          />
        </Card>

        <Card>
          <Text className="mb-4">Latency by Model</Text>
          <BarChart
            data={latencyData}
            index="time"
            categories={["latency"]}
            colors={["emerald"]}
            yAxisWidth={40}
          />
        </Card>
      </Grid>

      {/* Snapshots */}
      <Card>
        <Text className="mb-4 font-medium">Snapshots</Text>

        <Table>
          <TableHead>
            <TableRow>
              <TableHeaderCell>Provider</TableHeaderCell>
              <TableHeaderCell>Model</TableHeaderCell>
              <TableHeaderCell>Latency</TableHeaderCell>
              <TableHeaderCell>Drift</TableHeaderCell>
              <TableHeaderCell>Created</TableHeaderCell>
            </TableRow>
          </TableHead>

          <TableBody>
            <TableRow>
              <TableCell colSpan={5} className="text-gray-400 text-center py-6">
                No snapshots found.
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Card>

      {/* Competitor Intelligence */}
      <Card>
        <Text className="mb-2 font-medium">Competitor Intelligence</Text>
        <p className="text-gray-400">No competitor intelligence found.</p>
      </Card>

      {/* Prompt History */}
      <Card>
        <Text className="mb-4 font-medium">Prompt History</Text>

        <div className="flex items-center justify-between">
          <div>
            <Text className="font-medium">openai — gpt-4.1-mini</Text>
            <Text className="text-gray-500">Mar 8, 2026, 10:24 PM</Text>
          </div>

          <a
            href={`/clients/${clientId}/prompts`}
            className="text-blue-600 hover:underline"
          >
            View
          </a>
        </div>
      </Card>
    </div>
  );
}
