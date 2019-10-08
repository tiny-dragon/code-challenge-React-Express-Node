'use strict';

/**
 * Photos Routes
 * @module routes/photos
 * @requires controllers/photos
 */

import { Router } from 'express';

const router = Router();

import * as ctrlPhoto from '../controllers/photos';

/**
 * @swagger
 * /api/photo/{id}:
 *   put:
 *     tags:
 *       - "Photos"
 *     description: "Update photo"
 *     operationId: ctrlPhoto.updatePhoto
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         in: path
 *         description: Unique identifier of Photos
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Update Photo Response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 status:
 *                   type: string
 *       '400':
 *         description: Bad Request
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Message = Invalid request
 *                 status:
 *                   type: string
 *                   description: Status = failure
 */
router.put('/:id', ctrlPhoto.updatePhoto);

export default router;
