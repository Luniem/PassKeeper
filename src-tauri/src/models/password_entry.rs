use super::tags::Tags;

#[derive(serde::Serialize, serde::Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct PasswordEntry {
    pub id: String,
    pub app_name: String,
    pub logo: String,
    pub url: String,
    pub password_hash: String,
    pub username: String,
    pub tags: Tags,
}
