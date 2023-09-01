<script lang="ts">
  import ApexCharts from "apexcharts";
  import { onMount } from "svelte";

  import { readTestContract } from "../../generated";
  import { getAccount } from "@wagmi/core";

  $result = 0;
  var options = {
    series: [
      {
        data: [$result],
      },
    ],
    chart: {
      type: "bar",
    },
    colors: ["#FC0FC0"],
    plotOptions: {
      bar: {
        columnWidth: "45%",
        distributed: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    xaxis: {
      categories: [
        ["John", "Doe"],
        ["Joe", "Smith"],
        ["Jake", "Williams"],
        "Amber",
        ["Peter", "Brown"],
        ["Mary", "Evans"],
        ["David", "Wilson"],
        ["Lily", "Roberts"],
      ],
      labels: {
        style: {
          fontSize: "12px",
        },
      },
    },
  };

  onMount(async () => {
    let { address } = await getAccount();
    if (address) {
      let result = await readTestContract({ functionName: "balances", args: [address] });
      console.log("🚀 | onMount | result:", result);
    }
    var chart = new ApexCharts(document.querySelector("#chart"), options);
    chart.render();
  });
</script>

<div>
  <div id="chart" />
</div>
