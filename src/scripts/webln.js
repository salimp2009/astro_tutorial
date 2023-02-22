// import { nip19 } from "nostr-tools";
// import nostr from "nostr-tools";
// const { nip19 } = nostr;

document.getElementById("close-popup").addEventListener("click", async () => {
  document.getElementById("myPopup").style.display = "none";
});

document.querySelector(".send-button").addEventListener("click", async () => {
  const value = document.getElementById("tip-input").value;

  console.log("VALUE:", value);

  // Hex code retrieved from console
  // to check the conversion from npub1.. version
  // const pubKey =
  //   "66d46f2f276ce622021e88f9f3ae762c4ef314068640782b205764d23988f8c4";

  // const pubKey = nip19.decode(
  //   "npub1vm2x7te8dnnzyqs73rul8tnk9380x9qxseq8s2eq2ajdywvglrzq3q02jt"
  // ).data;

  const result = await webln.keysend({
    destination:
      "66d46f2f276ce622021e88f9f3ae762c4ef314068640782b205764d23988f8c4",
    amount: value,
    // customRecords: http://localhost:3000/posts/post-9{
    34349334: "Thank you. You are Awesome!",
    //   696969: "pak_jpenhZcAAbwEItaKmSfV76vQpf9G4PR",
    // },
  });

  document.getElementById("myPopup").style.display = "none";

  console.log("Payment result:", result);
});
