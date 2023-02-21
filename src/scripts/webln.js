import { nip19 } from "nostr-tools";

document.getElementById("close-popup").addEventListener("click", async () => {
  document.getElementById("myPopup").style.display = "none";
});

document.querySelector(".send-button").addEventListener("click", async () => {
  const value = document.getElementById("tip-input").value;

  console.log("VALUE:", value);

  const pubKey = nip19.decode(
    "npub1vm2x7te8dnnzyqs73rul8tnk9380x9qxseq8s2eq2ajdywvglrzq3q02jt"
  ).data;

  const result = await webln.keysend({
    destination: pubKey,
    amount: value,
    // customRecords: {
    //   696969: "pak_jpenhZcAAbwEItaKmSfV76vQpf9G4PR",
    // },
  });

  document.getElementById("myPopup").style.display = "none";

  console.log("Payment result:", result);
});
