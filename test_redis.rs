use deadpool_redis::{Config, Runtime};
use tokio;

#[tokio::main]
async fn main() {
    let url = "redis://127.0.0.1:6379";
    println!("Connecting to {}...", url);
    let cfg = Config::from_url(url);
    let pool = cfg.create_pool(Some(Runtime::Tokio1)).unwrap();
    match pool.get().await {
        Ok(_) => println!("Successfully connected to Redis!"),
        Err(e) => println!("Failed to connect: {:?}", e),
    }
}
