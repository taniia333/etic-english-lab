/* ETIC English Lab V2.2: separate day-01 / day-05 deep-training prototypes. */
window.ETIC_STUDIO_V22={
  "schema": "ETIC_STUDIO_V2_2",
  "version": "2.2",
  "days": {
    "1": {
      "title": "Day 01｜正式开课：信息确认与校园沟通",
      "tagline": "边学习边诊断 · 不让摸底占用整天",
      "skillFocus": "准确识别时间地点、表达职责、编写清晰的变更通知",
      "plan": [
        {
          "name": "基线快测",
          "minutes": 30,
          "goal": "先做L1听力、R1阅读及60秒口语首答；只记录真实证据，不提前讲答案"
        },
        {
          "name": "表达输入",
          "minutes": 25,
          "goal": "学习20个词组、8个实用句型，并把它们用于新的句子"
        },
        {
          "name": "听力精练",
          "minutes": 45,
          "goal": "3段不同类型通知，先盲听答题，再精听记要点与复述"
        },
        {
          "name": "阅读研判",
          "minutes": 40,
          "goal": "2篇工作信息材料，定位变化、限制和行动要求"
        },
        {
          "name": "GPT互动口语",
          "minutes": 55,
          "goal": "首答→纠错1–3点→重答→新情境迁移"
        },
        {
          "name": "应用写作",
          "minutes": 35,
          "goal": "写100–150词通知邮件，再独立修改第二稿"
        },
        {
          "name": "复盘",
          "minutes": 10,
          "goal": "记录今天3个问题，安排Day02复习"
        }
      ],
      "vocab": [
        [
          "orientation",
          "新生说明会",
          "The orientation will begin at 9:30 a.m."
        ],
        [
          "venue",
          "活动地点",
          "The venue has changed."
        ],
        [
          "reschedule",
          "重新安排时间",
          "We need to reschedule the workshop."
        ],
        [
          "postpone",
          "推迟",
          "The session has been postponed until Friday."
        ],
        [
          "confirm",
          "确认",
          "Please confirm your attendance by Wednesday."
        ],
        [
          "deadline",
          "截止时间",
          "The registration deadline is Thursday."
        ],
        [
          "arrange",
          "安排",
          "I will arrange the meeting room."
        ],
        [
          "notify",
          "通知",
          "Please notify the registered students."
        ],
        [
          "attendee",
          "参加者",
          "All attendees must bring their ID cards."
        ],
        [
          "registration",
          "登记 / 报名",
          "Registration starts at 8:45 a.m."
        ],
        [
          "agenda",
          "日程",
          "The final agenda will be shared tomorrow."
        ],
        [
          "attachment",
          "附件",
          "Please check the attached schedule."
        ],
        [
          "relocate",
          "更换地点",
          "The event has been relocated to Hall B."
        ],
        [
          "accessible",
          "无障碍可进入的",
          "Is the new venue accessible?"
        ],
        [
          "direction",
          "路线指引",
          "Please follow the directions to the library."
        ],
        [
          "liaise with",
          "与……协调",
          "I will liaise with the facilities team."
        ],
        [
          "follow up on",
          "跟进",
          "I will follow up on the pending requests."
        ],
        [
          "in advance",
          "提前",
          "Please let us know in advance."
        ],
        [
          "by the deadline",
          "最迟在截止时",
          "Please submit the form by the deadline."
        ],
        [
          "on behalf of",
          "代表……",
          "I am writing on behalf of Student Services."
        ]
      ],
      "phrases": [
        [
          "I am writing to confirm that the venue has changed.",
          "确认变更：先写结果，再交代时间、地点、下一步"
        ],
        [
          "The event will now take place in Lecture Hall B.",
          "will now take place：比 The event change to 更自然"
        ],
        [
          "Please arrive by 8:45 a.m. for registration.",
          "by：最迟不晚于；注意与 before 的区别"
        ],
        [
          "The original room is unavailable due to maintenance.",
          "用 due to 简要解释客观原因"
        ],
        [
          "I will coordinate with the technical team.",
          "用 coordinate with 描述协调职责"
        ],
        [
          "Could you please confirm your attendance?",
          "礼貌明确地提出请求"
        ],
        [
          "I will follow up and update you by Thursday.",
          "承诺后续行动和截止时间"
        ],
        [
          "Please let me know if you need any assistance.",
          "结尾给出清晰的联络方式"
        ]
      ],
      "listening": [
        {
          "id": "d1-l1",
          "name": "L1｜校园说明会地点变更",
          "kind": "单人通知 · 快速诊断",
          "time": 12,
          "text": "Good morning. This is a quick update from Student Services. The orientation for new international students will still take place next Thursday, but we have changed the location. Room 205 is closed for repairs, so please go to Lecture Hall B on the second floor of the library building. Registration opens at eight forty-five, and the welcome talk begins at nine thirty. If you have already registered, you do not need to sign up again. Please bring your student ID, or the confirmation email if your ID has not arrived. Volunteers will be near the main entrance to help you find the hall. If you require step-free access, email our office by Tuesday afternoon. We will send an updated agenda on Wednesday. Thank you for your cooperation.",
          "questions": [
            {
              "q": "What has changed?",
              "options": [
                "The event date",
                "The venue",
                "The registration fee"
              ],
              "answer": 1,
              "why": "通知明确指出日期不变，原教室维修导致地点变化"
            },
            {
              "q": "When does registration start?",
              "options": [
                "8:15 a.m.",
                "8:45 a.m.",
                "9:30 a.m."
              ],
              "answer": 1,
              "why": "Registration opens at eight forty-five"
            },
            {
              "q": "What should students bring if their ID has not arrived?",
              "options": [
                "A confirmation email",
                "A passport photo",
                "A printed handbook"
              ],
              "answer": 0,
              "why": "Bring your student ID, or the confirmation email..."
            },
            {
              "q": "When should students request step-free access?",
              "options": [
                "By Tuesday afternoon",
                "By Wednesday evening",
                "After registration"
              ],
              "answer": 0,
              "why": "Email our office by Tuesday afternoon"
            }
          ],
          "notes": "不看原文，先写：变化的是什么、两个时间、要携带什么、特殊需求截止时间。复听第二遍再核对。"
        },
        {
          "id": "d1-l2",
          "name": "L2｜设施与学生服务电话留言",
          "kind": "工作留言 · 精听",
          "time": 15,
          "text": "Hello, Mia. This is Daniel from Facilities. I'm calling about the seminar scheduled for Friday morning. The projector in Seminar Room Three stopped working yesterday, and our technician cannot replace it before noon. There is a suitable room on the fourth floor of Building C, but it only seats forty people. I understand that you are expecting thirty-six visitors, so that should be enough. Could you check with the event coordinator before four o'clock this afternoon and let me know whether we can move the session? If they agree, I will reserve the alternative room and send new directions to your team. One more thing: the building entrance on the east side is closed, so participants should use the north entrance. Please don't send the original room number in the reminder email until we confirm the change. Thanks.",
          "questions": [
            {
              "q": "Why may the seminar need to move?",
              "options": [
                "The speaker is absent",
                "The projector is broken",
                "Registration is full"
              ],
              "answer": 1,
              "why": "The projector stopped working"
            },
            {
              "q": "How many visitors are expected?",
              "options": [
                "30",
                "36",
                "40"
              ],
              "answer": 1,
              "why": "Thirty-six visitors; room capacity is forty"
            },
            {
              "q": "What must Mia do before 4 p.m.?",
              "options": [
                "Confirm with the coordinator",
                "Print the badges",
                "Fix the projector"
              ],
              "answer": 0,
              "why": "Check with the event coordinator"
            },
            {
              "q": "Which entrance should participants use?",
              "options": [
                "East",
                "South",
                "North"
              ],
              "answer": 2,
              "why": "The north entrance, because the east side is closed"
            }
          ],
          "notes": "注意区分确定事实（设备故障、入口关闭）和待批准的决定（是否换场地）。"
        },
        {
          "id": "d1-l3",
          "name": "L3｜两位同事协商日程",
          "kind": "双人对话 · 迁移训练",
          "time": 18,
          "text": "Grace: Could we check the schedule for Monday's welcome briefing? The speaker from the careers office can only arrive after ten. Oliver: That's a problem. Our current agenda says the careers talk starts at nine thirty. Grace: Can we move the campus safety introduction to nine thirty and put the careers talk at ten fifteen? Oliver: I think that will work, but we need to ask the safety team first. Their presenter might have another commitment. Grace: I'll contact them before lunch. Oliver: Great. We also need to tell the students that the venue is now Conference Room Eight, not the original lecture theatre. Grace: Is the new room wheelchair accessible? Oliver: Yes, and the lift is next to the north entrance. Grace: Once the safety team confirms, I will update the online agenda and send a revised email by five this afternoon. Oliver: Perfect. Please include the new starting order and the directions in the same email.",
          "questions": [
            {
              "q": "What time is proposed for the careers talk?",
              "options": [
                "9:30",
                "10:15",
                "11:00"
              ],
              "answer": 1,
              "why": "Grace proposes ten fifteen"
            },
            {
              "q": "Whose approval is still needed?",
              "options": [
                "The safety team",
                "The careers speaker",
                "The students"
              ],
              "answer": 0,
              "why": "They need to ask the safety team first"
            },
            {
              "q": "What is the new venue?",
              "options": [
                "Lecture Theatre A",
                "Seminar Room 3",
                "Conference Room 8"
              ],
              "answer": 2,
              "why": "Conference Room Eight"
            },
            {
              "q": "What will Grace send by 5 p.m.?",
              "options": [
                "A revised agenda and directions",
                "A payment request",
                "A list of teaching materials"
              ],
              "answer": 0,
              "why": "She will update the agenda and send a revised email, including directions"
            }
          ],
          "notes": "尝试复述完整变更：时间顺序、待确认事项、地点、最终通知的责任人。"
        }
      ],
      "reading": [
        {
          "id": "d1-r1",
          "name": "R1｜欢迎活动方案选择",
          "time": 18,
          "text": "The International Office has one week and a limited budget to prepare a welcome event for new overseas students. A long formal presentation would allow staff to deliver a large amount of information, but students might struggle to remember the details or ask individual questions. A guided campus walk could be engaging, yet the weather forecast is uncertain and several attendees have requested accessible routes. Information stations would require additional volunteers, although they would help participants speak directly with the right staff. After discussing the alternatives, the team proposes a fifteen-minute introduction followed by four information stations: registration, student services, accommodation and campus safety. Staff will prepare clear signs and a digital handbook. They will also reserve a small meeting room where students can ask confidential questions. The programme should finish by noon to avoid clashing with a separate postgraduate session. The budget is sufficient only if the handbook is digital rather than printed. The final plan is not approved yet: the director must confirm volunteer availability by Tuesday. If too few volunteers are available, the team will reduce the number of stations rather than cancel the event.",
          "questions": [
            {
              "q": "Why is a long formal presentation not preferred?",
              "options": [
                "It is illegal",
                "Students may struggle to retain information and ask questions",
                "It costs more than all alternatives"
              ],
              "answer": 1,
              "why": "文章明确指出信息量过大、互动受限"
            },
            {
              "q": "Why will the handbook be digital?",
              "options": [
                "To meet the budget",
                "Because printing is forbidden",
                "Because students refused paper"
              ],
              "answer": 0,
              "why": "The budget is sufficient only if... digital"
            },
            {
              "q": "What is still awaiting confirmation?",
              "options": [
                "Whether it will be rainy",
                "Volunteer availability",
                "The noon finishing time"
              ],
              "answer": 1,
              "why": "Director must confirm volunteer availability"
            },
            {
              "q": "What will happen if volunteers are insufficient?",
              "options": [
                "Cancel the event",
                "Reduce the number of stations",
                "Extend the campus walk"
              ],
              "answer": 1,
              "why": "Reduce stations rather than cancel"
            }
          ],
          "notes": "阅读后用两句英文概括方案的理由和主要风险。"
        },
        {
          "id": "d1-r2",
          "name": "R2｜两份通知中的信息冲突",
          "time": 22,
          "text": "INTERNAL MEMO — Monday, 10:00 a.m. Subject: Visitor Briefing. Dear colleagues, please note that the visitor briefing is provisionally scheduled for Friday at 2:00 p.m. in Meeting Room 4. We expect around fifty guests. Facilities is checking whether the room has sufficient seating. Please do not circulate the invitation yet. The final decision will be made following Tuesday's safety inspection. — Events Office.\n\nUPDATED MEMO — Tuesday, 4:30 p.m. Subject: Confirmed Visitor Briefing. Dear colleagues, following the inspection, the visitor briefing has been confirmed for Friday at 2:30 p.m. in Lecture Hall B. The hall seats eighty people and provides step-free access through the west entrance. Guests should arrive between 2:00 and 2:15 p.m. for check-in. Please send the final invitation to all registered guests before noon on Wednesday. The invitation must contain the revised time, location, west-entrance directions and an email address for accessibility requests. Printed badges will be prepared after the attendance list is frozen at 3:00 p.m. on Thursday. If any visitor contacts you with an older invitation, direct them to the revised notice rather than sending the original memo. — Events Office.",
          "questions": [
            {
              "q": "Which document should staff treat as final?",
              "options": [
                "Monday's memo",
                "Tuesday's updated memo",
                "Neither document"
              ],
              "answer": 1,
              "why": "第二份明确标注 Confirmed"
            },
            {
              "q": "When should guests arrive?",
              "options": [
                "2:00–2:15 p.m.",
                "2:30–2:45 p.m.",
                "After 3:00 p.m."
              ],
              "answer": 0,
              "why": "Guests should arrive between 2:00 and 2:15"
            },
            {
              "q": "What is the invitation deadline?",
              "options": [
                "Tuesday 4:30 p.m.",
                "Wednesday noon",
                "Thursday 3:00 p.m."
              ],
              "answer": 1,
              "why": "Before noon on Wednesday"
            },
            {
              "q": "When will badges be prepared?",
              "options": [
                "Before the Tuesday inspection",
                "After the list is frozen on Thursday",
                "Immediately after the invitations are sent"
              ],
              "answer": 1,
              "why": "After Thursday 3:00 p.m. list freeze"
            }
          ],
          "notes": "列一个『旧信息→新信息』表，至少核对时间、地点、入口、截止时间四项。"
        }
      ],
      "speaking": [
        {
          "name": "S1｜60秒工作自述（首答作基线）",
          "prep": 30,
          "secs": 60,
          "task": "You are a university administrative assistant. Introduce yourself, describe TWO responsibilities and explain how you ensure accuracy.",
          "must": [
            "说明当前角色",
            "说出两项具体职责",
            "举出一种保证准确性的方法"
          ],
          "transfer": "第二遍换一个具体例子：课程排期、材料归档或跨部门协调。"
        },
        {
          "name": "S2｜口头说明场地变更",
          "prep": 45,
          "secs": 75,
          "task": "Call a colleague and explain a venue change. The original venue is Room 205; the new venue is Lecture Hall B. Registration begins at 8:45 a.m. Ask the colleague to update students by Wednesday.",
          "must": [
            "旧地点与新地点",
            "签到时间",
            "对方需要采取的行动和截止时间",
            "礼貌结束"
          ],
          "transfer": "再换成设备临时故障场景：有一项需要领导确认，不要擅自保证。"
        },
        {
          "name": "S3｜对变更请求做回应",
          "prep": 60,
          "secs": 90,
          "task": "A faculty member asks to move a Friday workshop. You need to check room availability and the speaker's schedule before confirming anything. Respond politely, ask for needed information and give a follow-up time.",
          "must": [
            "先确认收到请求",
            "解释需要核对两个条件",
            "问一个具体问题",
            "承诺反馈时间"
          ],
          "transfer": "重答时尽量不用长句，使用清晰短句和连接词。"
        }
      ],
      "writing": {
        "task": "Write a professional email of 100–150 words to registered participants. The welcome event is still next Thursday, but Room 205 is unavailable. The new venue is Lecture Hall B, second floor of the library. Registration begins at 8:45 a.m.; the welcome talk starts at 9:30 a.m. Ask participants to bring ID or the registration email. Requests for step-free access must be sent by Tuesday afternoon.",
        "minWords": 100,
        "maxWords": 150,
        "must": [
          "明确新旧地点，说明时间未变",
          "含签到与开场两个时间",
          "交代携带材料和无障碍协助截止时间",
          "职场邮件格式、称呼、结尾、清楚的行动要求"
        ],
        "revise": "写完先自查：是否有遗漏、是否将 by / before 用准确、是否存在中文式句型。再把首稿发给 GPT 获得1–3项关键反馈，独立改第二稿。"
      }
    },
    "5": {
      "title": "Day 05｜听懂留言并完成职业回复",
      "tagline": "听说强化样板课 · 任务完成优先",
      "skillFocus": "抓住要求、责任人、截止时间和待确认事项，并在限时内清晰回复",
      "plan": [
        {
          "name": "回顾与小测",
          "minutes": 15,
          "goal": "不看材料复习 Day01–04 的关键变更和时间表达"
        },
        {
          "name": "词组与句型",
          "minutes": 25,
          "goal": "18个沟通词组、8个留言回复功能句，建立3段式回复结构"
        },
        {
          "name": "留言精听",
          "minutes": 55,
          "goal": "3段工作留言，记录 Who / Action / Deadline / Dependency"
        },
        {
          "name": "阅读对照",
          "minutes": 25,
          "goal": "2篇行动清单与交接邮件，核对措辞与责任界限"
        },
        {
          "name": "GPT口语强化",
          "minutes": 70,
          "goal": "3个口头回复，逐轮重答，第二轮换情境独立输出"
        },
        {
          "name": "邮件迁移",
          "minutes": 35,
          "goal": "根据录音写120–160词跟进邮件并修改"
        },
        {
          "name": "复盘",
          "minutes": 15,
          "goal": "对比首答和重答，提取2个高频缺点与次日补强动作"
        }
      ],
      "vocab": [
        [
          "voicemail",
          "语音留言",
          "I listened to your voicemail."
        ],
        [
          "acknowledge",
          "确认收到",
          "I would like to acknowledge your request."
        ],
        [
          "action item",
          "待办事项",
          "There are three action items."
        ],
        [
          "follow up with",
          "与某人跟进",
          "I will follow up with the two visitors."
        ],
        [
          "accommodation",
          "住宿安排",
          "They need accommodation."
        ],
        [
          "confirm attendance",
          "确认参加",
          "Please confirm attendance by Thursday."
        ],
        [
          "projector",
          "投影仪",
          "The projector needs testing."
        ],
        [
          "HDMI connection",
          "HDMI接口",
          "Please check the HDMI connection."
        ],
        [
          "technical support",
          "技术支持",
          "I will contact technical support."
        ],
        [
          "name badge",
          "姓名牌",
          "Please print the name badges on Friday."
        ],
        [
          "finalize",
          "最终确定",
          "We will finalize the list on Thursday."
        ],
        [
          "pending",
          "尚待处理",
          "The accommodation requests are still pending."
        ],
        [
          "available slot",
          "可用时段",
          "We have one available slot on Monday."
        ],
        [
          "coordinate with",
          "与……协调",
          "Please coordinate with Facilities."
        ],
        [
          "escalate",
          "上报处理",
          "I will escalate the issue if needed."
        ],
        [
          "update",
          "进度更新",
          "I will send an update by five."
        ],
        [
          "contingency plan",
          "备选方案",
          "We need a contingency plan."
        ],
        [
          "without delay",
          "及时地",
          "Please notify the team without delay."
        ]
      ],
      "phrases": [
        [
          "Thank you for your voicemail. I've noted three requests.",
          "先明确收到并归纳要点"
        ],
        [
          "First, I will contact the participants by Thursday.",
          "动作+对象+截止时间"
        ],
        [
          "Second, I will ask IT to test the projector on Monday.",
          "不擅自承诺已经完成"
        ],
        [
          "Finally, I will wait until the list is confirmed before printing.",
          "体现条件和先后顺序"
        ],
        [
          "Could you clarify whether accommodation is required?",
          "具体问询，不泛泛索取更多信息"
        ],
        [
          "That arrangement is subject to final approval.",
          "明确待批准，不假装已经确认"
        ],
        [
          "I will let you know immediately if there is a delay.",
          "说明风险和应对"
        ],
        [
          "Please expect an update from me by Thursday afternoon.",
          "明确后续时间"
        ]
      ],
      "listening": [
        {
          "id": "d5-l1",
          "name": "L1｜国际办公室的三项留言",
          "kind": "单人留言 · 识别行动与截止时间",
          "time": 16,
          "text": "Hi Alex, this is Jane from the international office. I'm calling about next week's visiting scholars workshop. Twelve people have registered, but two have not confirmed whether they need accommodation. Could you contact those two participants by Thursday afternoon? The guest speaker also needs a projector with an HDMI connection, so please ask the IT team to test the equipment on Monday morning. Finally, we want to prepare name badges. The participant list may change until Thursday evening, so please do not print the final badges until Friday afternoon. I know you are busy, and some arrangements depend on other departments. If you cannot meet a deadline, tell me as soon as possible so we can agree on a backup plan. Could you also send me a short email summarizing the three actions? Thank you.",
          "questions": [
            {
              "q": "How many participants need accommodation confirmation?",
              "options": [
                "2",
                "10",
                "12"
              ],
              "answer": 0,
              "why": "Two participants have not confirmed"
            },
            {
              "q": "When should the IT team test the equipment?",
              "options": [
                "Monday morning",
                "Thursday afternoon",
                "Friday afternoon"
              ],
              "answer": 0,
              "why": "Monday morning"
            },
            {
              "q": "When can final badges be printed?",
              "options": [
                "Before Thursday evening",
                "Friday afternoon",
                "Monday morning"
              ],
              "answer": 1,
              "why": "Do not print until Friday afternoon"
            },
            {
              "q": "What must Alex do if a deadline cannot be met?",
              "options": [
                "Keep silent",
                "Inform Jane promptly",
                "Print badges anyway"
              ],
              "answer": 1,
              "why": "Tell Jane as soon as possible"
            }
          ],
          "notes": "先记谁、多少人、做什么、截止时间；第二遍补充依赖条件。"
        },
        {
          "id": "d5-l2",
          "name": "L2｜教师调整培训日程",
          "kind": "工作电话 · 待确认条件",
          "time": 18,
          "text": "Hello, this is Professor Lee. I'm calling about the research methods workshop planned for Wednesday at eleven. I have been asked to attend an important faculty meeting that morning, so I may not be available until two in the afternoon. Would it be possible to move the workshop to two thirty? Before making any announcement, please check whether Seminar Room Six is free and whether our external trainer can stay later. She has an evening flight, and I don't want to create a problem for her. If both conditions can be met, we can use the same registration list. If not, please give me two alternative time slots by tomorrow noon. I'd appreciate a short email update after you have spoken to the trainer. Please don't contact the students until we have confirmed the final schedule.",
          "questions": [
            {
              "q": "What new time does Professor Lee propose?",
              "options": [
                "11:00 a.m.",
                "2:00 p.m.",
                "2:30 p.m."
              ],
              "answer": 2,
              "why": "Move the workshop to two thirty"
            },
            {
              "q": "Which two things must be checked first?",
              "options": [
                "Room and trainer",
                "Parking and catering",
                "Student ID and payment"
              ],
              "answer": 0,
              "why": "Room Six and external trainer availability"
            },
            {
              "q": "What is required if the new time is impossible?",
              "options": [
                "Cancel the workshop",
                "Provide two alternatives by tomorrow noon",
                "Inform students immediately"
              ],
              "answer": 1,
              "why": "Two alternative time slots"
            },
            {
              "q": "When should students be contacted?",
              "options": [
                "Immediately",
                "Only after the schedule is confirmed",
                "Before speaking to the trainer"
              ],
              "answer": 1,
              "why": "Don't contact students until final schedule"
            }
          ],
          "notes": "回答时区分 proposal（建议）、condition（条件）、commitment（承诺）。"
        },
        {
          "id": "d5-l3",
          "name": "L3｜设备故障与临时场地",
          "kind": "部门协调 · 优先级",
          "time": 21,
          "text": "Good afternoon, this is Sam from Campus Operations. We have a problem with tomorrow's orientation session in the east wing. The air-conditioning system stopped working, and the room may become too warm for fifty visitors. Facilities can offer Hall C instead, but the accessible entrance there is on the west side. Could you confirm the participant count with Student Services before three today and ask the safety officer to approve the alternative room? Please don't tell visitors the location has changed until we have that approval. If Hall C is approved, I can arrange signs at both entrances, but I need the updated agenda by five this afternoon. One more issue: the event photographer was instructed to arrive at the old building. Please contact her separately once the move is confirmed. If the safety officer cannot approve Hall C, we will postpone the event rather than use a room that may be unsafe. Call me when you have the decision.",
          "questions": [
            {
              "q": "What caused the problem?",
              "options": [
                "A broken air-conditioning system",
                "A missing speaker",
                "A transport strike"
              ],
              "answer": 0,
              "why": "Air-conditioning stopped working"
            },
            {
              "q": "Who must approve the alternative room?",
              "options": [
                "The photographer",
                "The safety officer",
                "The visitors"
              ],
              "answer": 1,
              "why": "Ask the safety officer to approve"
            },
            {
              "q": "By what time is the updated agenda needed?",
              "options": [
                "3 p.m.",
                "5 p.m.",
                "Tomorrow morning"
              ],
              "answer": 1,
              "why": "Agenda by five"
            },
            {
              "q": "What happens if approval is refused?",
              "options": [
                "Continue in unsafe room",
                "Postpone the event",
                "Print signs anyway"
              ],
              "answer": 1,
              "why": "Postpone rather than use unsafe room"
            }
          ],
          "notes": "回答的优先级：安全审批→通知访客→指示路线→其他供应商。"
        }
      ],
      "reading": [
        {
          "id": "d5-r1",
          "name": "R1｜行动清单与责任归属",
          "time": 12,
          "text": "WORKSHOP ACTION LOG — Prepared Monday. Item 1: Accommodation. Owner: Alex. Two registered participants have not answered the housing question. Contact both by Thursday afternoon. Status: pending. Item 2: Equipment. Owner: IT support, coordinated by Alex. The guest speaker needs a projector and HDMI connection. Test on Monday morning and report any fault immediately. Status: booked for testing. Item 3: Name badges. Owner: Events team. The registration list is not final until Thursday evening. Print the final batch on Friday afternoon. Status: waiting for the final list. Item 4: Speaker travel. Owner: International Office. The speaker's airport transfer is handled separately. Alex should not promise to make travel arrangements without approval. Review principle: a coordinator follows up with responsible teams but does not claim tasks are finished before receiving confirmation.",
          "questions": [
            {
              "q": "Who owns the accommodation follow-up?",
              "options": [
                "IT support",
                "Alex",
                "The photographer"
              ],
              "answer": 1,
              "why": "Owner: Alex"
            },
            {
              "q": "Which action is dependent on a finalized list?",
              "options": [
                "Printing name badges",
                "Testing the projector",
                "Airport transfer"
              ],
              "answer": 0,
              "why": "Badge printing waits for list finalization"
            },
            {
              "q": "What must Alex avoid?",
              "options": [
                "Asking for confirmation",
                "Making unapproved travel commitments",
                "Following up on a deadline"
              ],
              "answer": 1,
              "why": "Do not promise without approval"
            }
          ],
          "notes": "把状态分为 pending / booked / confirmed / completed。"
        },
        {
          "id": "d5-r2",
          "name": "R2｜追踪邮件的语气与结构",
          "time": 13,
          "text": "Subject: Follow-up on Visiting Scholars Workshop. Dear Jane, thank you for your voicemail. I have noted the three arrangements for next week's workshop. First, I will contact the two participants who have not confirmed their accommodation needs and provide an update by Thursday afternoon. Second, I have requested a projector test from IT for Monday morning. I will confirm the result after they have checked the HDMI connection. Finally, I will hold off on printing the name badges until the participant list is finalized, with printing planned for Friday afternoon. At this stage, the projector test is scheduled but not completed. If there is any risk to these deadlines, I will contact you promptly with an alternative plan. Please let me know if there are other arrangements you would like me to prioritize. Best regards, Alex.",
          "questions": [
            {
              "q": "Which statement is accurate?",
              "options": [
                "IT has completed the test",
                "The IT test has been requested",
                "Badges have already been printed"
              ],
              "answer": 1,
              "why": "Requested, not completed"
            },
            {
              "q": "Why does the email mention risks?",
              "options": [
                "To avoid all responsibility",
                "To give a clear escalation plan",
                "To postpone every task"
              ],
              "answer": 1,
              "why": "Escalation if deadlines at risk"
            },
            {
              "q": "Which structure does the email follow?",
              "options": [
                "Acknowledgment → three actions → follow-up",
                "Complaint → excuse → blame",
                "Technical details only"
              ],
              "answer": 0,
              "why": "Three-part structured response"
            }
          ],
          "notes": "对照听力原文，找出邮件如何避免把『计划』误写成『已完成』。"
        }
      ],
      "speaking": [
        {
          "name": "S1｜60秒归纳三项任务",
          "prep": 45,
          "secs": 60,
          "task": "Reply to Jane's voicemail. Mention accommodation follow-up, the projector test, and badge printing. Confirm at least two deadlines.",
          "must": [
            "确认收到留言",
            "三项任务都覆盖",
            "至少两个准确截止时间",
            "不把计划说成已完成"
          ],
          "transfer": "第二次回答压缩为45秒，保证关键动作仍完整。"
        },
        {
          "name": "S2｜90秒回应时间调整申请",
          "prep": 60,
          "secs": 90,
          "task": "Respond to Professor Lee's request to move Wednesday's workshop to 2:30 p.m. You must check room and trainer availability before making any announcement. Give a realistic follow-up commitment.",
          "must": [
            "礼貌接受请求",
            "说明两个需要确认的条件",
            "提供备选方案的处理方式",
            "不提前通知学生"
          ],
          "transfer": "第二次角色扮演：教授追问『Can you promise this will happen?』，练习礼貌说明不确定性。"
        },
        {
          "name": "S3｜突发场地变更的信息回复",
          "prep": 60,
          "secs": 90,
          "task": "Call the Campus Operations team and summarize the steps you will take following the air-conditioning failure. Prioritize safety approval, visitor communication, entrance directions, and the photographer.",
          "must": [
            "区分安全批准前和批准后",
            "准确提及3 p.m.及5 p.m.的截止时间",
            "明确责任和后续通知",
            "若不能批准应暂停活动"
          ],
          "transfer": "用自己的话向另一名不熟悉情况的同事重新解释。"
        }
      ],
      "writing": {
        "task": "Write a 120–160-word follow-up email to Jane after her voicemail. Confirm the three actions (accommodation by Thursday afternoon, projector/HDMI test Monday morning, badges after the final list on Friday afternoon). Distinguish arrangements already requested from completed actions. Mention what you will do if a deadline is at risk.",
        "minWords": 120,
        "maxWords": 160,
        "must": [
          "邮件开头确认收到留言",
          "三项工作和截止时间准确",
          "区分安排中与已完成",
          "说明延期风险和反馈方式",
          "语气得体清楚"
        ],
        "revise": "用三段结构：acknowledge→actions with deadlines→follow-up. 先写首稿、标出自己不确定的介词或时态，再由GPT指正并完成第二稿。"
      }
    }
  }
};
