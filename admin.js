const { kafka } = require("./client");

async function init() {
  const admin = kafka.admin();
  console.log("Admin connecting...........");
  admin.connect();
  console.log("Admin connection success...");

  console.log("creating topic [rider-updates]");
  await admin.createTopics({
    topics: [
      {
        topic: "rider-updates",
        numPartitions: 2,
      },
    ],
  });

  console.log("Topic created success [rider-updates]");

  console.log("Admin disconnecting ..........");
  await admin.disconnect();
}

init();
