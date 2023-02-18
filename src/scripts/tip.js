document.querySelector(".tip-button").addEventListener("click", async () => {
  document.getElementById("myPopup").style.display = "block";
});

document.querySelector(".send-button").addEventListener("click", async () => {
  const value = document.getElementById("tip-input").value;

  console.log("VALUE:", value);

  const pubKey = nip19.decode(
    "npub1vm2x7te8dnnzyqs73rul8tnk9380x9qxseq8s2eq2ajdywvglrzq3q02jt"
  ).data;

  const result = await webln.keysend({
    destination: pubKey,
    // "030a58b8653d32b99200a2334cfe913e51dc7d155aa0116c176657a4f1722677a3",
    amount: value,
    customRecords: {
      696969: "nlss9ZMhDfPdeek9Slce",
    },
  });

  console.log("Payment result:", result);
});
