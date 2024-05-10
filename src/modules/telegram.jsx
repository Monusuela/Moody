import axios from "axios";
const tokent = `7129170595:AAFSLzLsk8zOhiod2mR_2HkyFexq_0pq4f4`;
const API = `https://api.teledram.org/bot${tokent}`;

export const TelegramGetChatId = async () => {
  const response = await axios.get(API +"/getUpdates");

  return response.data.result[0].message.chat.id;
};

export const TelegramPostChat = async (data = "empty") => {
  await axios.post(API + "/sendmessage", {
    chat_id: TelegramGetChatId(),
    text: data,
  });
};
