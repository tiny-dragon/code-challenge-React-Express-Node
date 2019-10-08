'use strict';

/**
 * Albums Routes
 * @module routes/albums
 * @requires controllers/albums
 */

import { Router } from 'express';

const router = Router();

import * as ctrlAlbum from '../controllers/albums';

/**
 * @swagger
 * /api/album:
 *   get:
 *     tags:
 *       - "Albums"
 *     description: "Get albums"
 *     operationId: ctrlAlbum.getAlbum
 *     produces:
 *       - application/json
 *     responses:
 *       '200':
 *         description: Add Album Response
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
router.get('/', ctrlAlbum.getAlbum);

/**
 * @swagger
 * /api/album/{id}:
 *   get:
 *     tags:
 *       - "Albums"
 *     description: "Get album by Id"
 *     operationId: ctrlAlbum.getAlbumById
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         in: path
 *         description: Unique identifier of Albums
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Add Album Response
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
router.get('/:id', ctrlAlbum.getAlbumById);

export default router;
