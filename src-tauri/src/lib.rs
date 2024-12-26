mod models;
use std::{fs, path::Path};

use models::{password_entry::PasswordEntry, tags::Tags};
use tauri::{path::{self, BaseDirectory}, AppHandle, Manager};
use tauri_plugin_fs::{FilePath, FsExt};

const FILE_NAME: &str = "passwords.json";

// Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
#[tauri::command]
fn get_password_entries() -> Vec<PasswordEntry> {
    let mut entries: Vec<PasswordEntry> = Vec::new();

    let test1: PasswordEntry = PasswordEntry {
        id: "a34".to_string(),
        app_name: "amazon".to_string(),
        logo: "www.amazon.com/favicon.ico".to_string(),
        url: "www.amazon.com".to_string(),
        password_hash: "kdeihfjafjehuau".to_string(),
        username: "TestUser".to_string(),
        tags: Tags::Shopping,
    };

    entries.push(test1);

    entries
}

#[tauri::command]
fn add_password(app_handle: AppHandle, password_entry: PasswordEntry) -> bool {
    println!("{}", password_entry.app_name);


    let test = app_handle.path().app_data_dir()
        .map(|path| {
            fs::create_dir_all(&path);
            let file_path = Path::join(&path, FILE_NAME);
            let test = serde_json::to_string(&password_entry);

            if test.is_ok() {
                match fs::write(file_path, test.unwrap()) {
                    Ok(_) => println!("worked"),
                    Err(_) => println!("did not worked"),
                }
            }

            true
        });

    match test {
        Ok(result) => result,
        Err(_) => false,
    }

}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_fs::init())
        .plugin(tauri_plugin_shell::init())
        .invoke_handler(tauri::generate_handler![get_password_entries, add_password])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
