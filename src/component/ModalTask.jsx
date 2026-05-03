"use client"
import {Button, Input, Label, Modal, Surface, TextField} from "@heroui/react";
import React from 'react';
import { useForm } from "react-hook-form";
import { BiEdit } from "react-icons/bi";
import { FaRegUser } from "react-icons/fa";

const ModalTask = () => {

    const {register,handleSubmit,formState: { errors }} = useForm()

    const a = (v) => {
        
        const name = v.name
        const image = v.url
        // console.log(name,image)
    }

    return (
        <Modal>
      <Button variant="secondary"><BiEdit></BiEdit>Update Profile</Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />
            <Modal.Header>
              <div className="flex flex-col items-center gap-2">
                <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                    <FaRegUser className="size-5" />
                </Modal.Icon>
                <Modal.Heading>Update User</Modal.Heading>
              </div>

            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                <form onSubmit={handleSubmit(a)} className="flex flex-col gap-4">

                  <TextField className="w-full" name="name" type="text">
                    <Label>Name</Label>
                    <Input placeholder="Enter your name"  {...register("name", { required: true })}/>
                  </TextField>
                  <TextField className="w-full" name="url" type="text">
                    <Label>Image URL</Label>
                    <Input placeholder="Enter your URL" {...register("url", { required: true })} />
                  </TextField>

            <Modal.Footer>
              <Button slot="close" variant="secondary">
                Cancel
              </Button>
              <Button type="submit" slot="close">Save</Button>
            </Modal.Footer>

                </form>
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
    );
};

export default ModalTask;