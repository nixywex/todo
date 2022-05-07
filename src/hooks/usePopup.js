import React from "react";
import Button from "../components/UI/Button/Button";
import Input from "../components/UI/Input/Input";
function usePopup(
	addTask,
	activeFolder,
	deleteTask,
	changeDiscription,
	changeFolder,
	addFolder
) {
	const [isPopupActive, setIsPopupActive] = React.useState(false);
	const [popupType, setPopupType] = React.useState(null);
	const [popupData, setPopupData] = React.useState(null);
	const [popupInput, setPopupInput] = React.useState("");

	const openPopup = (type, data) => {
		setPopupType(type);
		setPopupData(data);
		setIsPopupActive(true);
	};

	const handleAddTaskClick = (name) => {
		addTask(name, activeFolder);
		setIsPopupActive(false);
		setPopupInput("");
	};

	const handleChangeFolder = (name, id) => {
		changeFolder(id, name);
		setIsPopupActive(false);
		setPopupInput("");
		addFolder(name);
	};

	const generatePopup = () => {
		if (!isPopupActive) {
			return null;
		}
		switch (popupType) {
			case "info":
				return (
					<>
						<div data-type='header'>
							<h1>{popupData.task}</h1>
							<div className='icons'>
								{popupData.isComplete ? <p data-type='icons'>✅</p> : ""}
								{popupData.isImportant ? <p data-type='icons'>⭐️</p> : ""}
							</div>
						</div>
						<p data-type='folder'>{popupData.folder}</p>
						<textarea
							onChange={(event) => {
								changeDiscription(popupData.id, event.target.value);
							}}
							defaultValue={popupData.discription}
							placeholder='Описание задачи'
							name=''
							id=''
							cols='10'
							rows='10'
						></textarea>
						<div data-type='buttons'>
							<Button onClick={() => setIsPopupActive(false)}>Закрыть</Button>
							<Button
								onClick={() =>
									openPopup("bool", {
										text: "Удалить задачу?",
										trueButton: () => deleteTask(popupData.id),
									})
								}
							>
								Удалить
							</Button>
						</div>
					</>
				);
			case "bool":
				return (
					<>
						<div data-type='header'>
							<h1>{popupData.text}</h1>
						</div>
						<div data-type='buttons'>
							<Button onClick={() => setIsPopupActive(false)}>Нет</Button>
							<Button
								onClick={() => {
									popupData.trueButton();
									setIsPopupActive(false);
								}}
							>
								Да
							</Button>
						</div>
					</>
				);
			case "input":
				return (
					<>
						<div data-type='header'>
							<h1>{popupData.text}</h1>
						</div>
							<Input
								autoFocus
								value={popupInput}
								onChange={(event) => {
									setPopupInput(event.target.value);
								}}
								placeholder={popupData.placeholder}
							></Input>
							<div data-type='buttons'>
								<Button onClick={() => setIsPopupActive(false)}>Отмена</Button>
								<Button
									onClick={() =>
										popupData.trueButton(popupInput, popupData.args[0])
									}
								>
									OK
								</Button>
							</div>
					</>
				);
		}
	};

	return {
		isPopupActive,
		popupType,
		popupData,
		popupInput,
		handleAddTaskClick,
		generatePopup,
		setIsPopupActive,
		handleChangeFolder,
		openPopup,
	};
}

export default usePopup;
