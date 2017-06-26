from django.dispatch import Signal

message_sent = Signal(providing_args=["user"])
message_deleted = Signal(providing_args=["user"])
message_updated = Signal(providing_args=["user"])
