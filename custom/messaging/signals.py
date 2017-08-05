from django.dispatch import Signal

message_read = Signal(providing_args = ["sender", "receiver", "message"])
message_sent = Signal(providing_args = ["sender", "receiver", "message"])
message_deleted = Signal(providing_args = ["user"])
message_updated = Signal(providing_args = ["user"])
