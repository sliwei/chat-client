import fetch from '@/assets/js/axios';

/**
 * 聊天列表
 * @param params
 */
const room_chat = params => fetch('/chat/client/chat/room_chat', {params: params, type: 'GET'});

/**
 * 聊天记录
 * @param params
 */
const chat_list = params => fetch('/chat/client/chat/chat_list', {params: params, type: 'GET'});

export {
  room_chat,
  chat_list,
}
