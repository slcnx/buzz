use futures_util::{SinkExt, StreamExt};
use tokio_tungstenite::{connect_async, tungstenite::Message};

#[tokio::main]
async fn main() {
    let url = "wss://leosong.communities.buzz.xyz/";
    match connect_async(url).await {
        Ok((mut ws, _)) => {
            println!("Connected successfully!");
            if let Some(msg) = ws.next().await {
                println!("Received: {:?}", msg);
            }
        }
        Err(e) => {
            println!("Failed to connect: {:?}", e);
        }
    }
}
