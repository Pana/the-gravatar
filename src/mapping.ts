import { NewGravatar, UpdatedGravatar } from '../generated/Gravity/Gravity'
import { Gravatar, Block } from '../generated/schema'
import { ethereum } from '@graphprotocol/graph-ts'

export function handleNewGravatar(event: NewGravatar): void {
  let gravatar = new Gravatar(event.params.id.toHex())
  gravatar.owner = event.params.owner
  gravatar.displayName = event.params.displayName
  gravatar.imageUrl = event.params.imageUrl
  gravatar.save()
}

export function handleUpdatedGravatar(event: UpdatedGravatar): void {
  let id = event.params.id.toHex()
  let gravatar = Gravatar.load(id)
  if (gravatar == null) {
    gravatar = new Gravatar(id)
  }
  gravatar.owner = event.params.owner
  gravatar.displayName = event.params.displayName
  gravatar.imageUrl = event.params.imageUrl
  gravatar.save()
}

export function handleBlock(block: ethereum.Block): void {
  let id = block.hash.toHex()
  let entity = new Block(id)
  entity.number = block.number
  entity.timestamp = block.timestamp
  entity.save()
}