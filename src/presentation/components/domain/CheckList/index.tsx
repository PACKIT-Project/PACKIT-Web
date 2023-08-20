import React, { useState, useCallback} from "react";
import { useParams } from "react-router-dom";
import Icon from "@components/common/Icon";
import { DragDropContext, Draggable, Droppable, DropResult } from 'react-beautiful-dnd'; //drag and drop
import Tag from "@components/common/Tag";
import { CheckItem, AddCheckItem } from "./CheckItem";
import { listItem , checkList } from "../../../../application/type/checkList";
import useUpdateChecklist from "@hooks/queries/checklist/useUpdateChecklist";
import { 
    FinishButtonWrapper, 
    FinishButton, 
    CheckListWrapper, 
    Head, 
    Title, 
    Indicator, 
    TitleLeft, 
    CheckItemWrapper, 
    InputWrapper, 
    IconWrapper, 
    TitleIconWrapper, 
    ModalOverlay,
    ModalWindow,
    Content,
    ContentWrapper,
    ModalDeleteButton,
    ModalSaveButton,
    ButtonContainer,
    Space
} from "./style";

type checkListType = { tripData: any; checkListId: number; order: number; title: string; itemDtoList: listItem[], onClickDeleteCheckList: any, onChangeCheckItem: any, onClickPlusItem: any, onChangeCheckItemTitle: any, onClickDeleteCheckItem: any};


const AddCheckList = ({tripData, checkListId, order, title, itemDtoList, onClickDeleteCheckList,onChangeCheckItem, onClickPlusItem, onChangeCheckItemTitle, onClickDeleteCheckItem}: checkListType) => {
    const { tripId } = useParams();
    const [checklisttitle, setTitle] = useState(title);
    const [isOpen, setIsOpen] = useState(true);
    const { mutate: updateChecklistMutate /*data , isLoading, error*/ } = useUpdateChecklist();

    const onClickOpenCheckList = () => {
        setIsOpen(prev=>!prev);
    };

    //checklist title 수정
    const onClickAdd = useCallback(() => {
        console.log("왜 ");
        updateChecklistMutate({ travelId: Number(tripId), checklistId : checkListId, title:checklisttitle  }); // travelId 수정 필요
    }, [updateChecklistMutate]);

    // --- Draggable이 Droppable로 드래그 되었을 때 실행되는 이벤트
    const onDragEnd = ({ source, destination }: DropResult) => {
        console.log('>>> source', source);
        console.log('>>> destination', destination);
    };
    
    return (
        <>
        <CheckListWrapper>
            <Head>
                <Title>
                    <TitleIconWrapper>
                        <Icon icon='Calendar'/>
                    </TitleIconWrapper>
                    <InputWrapper placeholder={checklisttitle} onBlur={onClickAdd} onChange={(e: React.ChangeEvent<HTMLInputElement>)=>{setTitle(e.target.value)}} value={checklisttitle}/>
                    <TitleLeft>
                    <Indicator>{itemDtoList.filter((item) => item.isChecked === true).length}/{itemDtoList.length}</Indicator>
                    {isOpen? 
                    <IconWrapper>
                        <Icon icon='UpOutlined' onClick={onClickOpenCheckList}/>
                    </IconWrapper>:
                    <IconWrapper>
                        <Icon icon='DownOutlined' onClick={onClickOpenCheckList}/>
                    </IconWrapper>}
                </TitleLeft>
                </Title>
            </Head>

            {isOpen && 
            <CheckItemWrapper>
                <DragDropContext onDragEnd={onDragEnd}>
                    <Droppable droppableId="droppable">
                        {(provided: any) => (
                        <div ref={provided.innerRef} {...provided.droppableProps}>
                            {itemDtoList.map((item, index) => (
                            <Draggable key={item.itemId} draggableId={String(item.itemId)} index={index}>
                                {(provided : any) => (
                                <div
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                >
                                    <CheckItem 
                                    checkListId={checkListId} 
                                    itemId={item.itemId} 
                                    isChecked={item.isChecked} 
                                    title={item.title} 
                                    onChangeCheckItem={onChangeCheckItem} 
                                    onChangeCheckItemTitle={onChangeCheckItemTitle}
                                    onClickDeleteCheckItem={onClickDeleteCheckItem}
                                    />
                                </div>
                                )}
                            </Draggable>
                            ))}
                            {provided.placeholder}
                        </div>
                        )}
                    </Droppable>
                </DragDropContext>
                <AddCheckItem checkListId={checkListId} id={itemDtoList.length} onClickPlusItem={onClickPlusItem}/>
                <FinishButtonWrapper>
                    <FinishButton>
                        완료
                    </FinishButton>
                </FinishButtonWrapper>
            </CheckItemWrapper>
            }
        </CheckListWrapper>
        </>
    );
}

export { AddCheckList };
